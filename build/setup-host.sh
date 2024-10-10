#!/bin/bash
source .env
source ~/.bashrc

## Script to setup the Studio EC2 instance
## With the necessary files and scripts

scp_key() {
    echo "Transfering to the Studio EC2 instance ..."
    scp -i "$SECRET_PEM_PATH" "$@"
}

ssh_custom() {
    echo "Connecting to the Studio EC2 instance: $1"
    ssh -i "$SECRET_PEM_PATH" "$STUDIO_EC2" "$@"
}

setup_and_pull() {
    echo "Setting up the Studio EC2 instance ..."
    ssh_custom aws --region eu-north-1 ecr get-login-password | docker login --username AWS --password-stdin 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio
    ssh_custom docker pull 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest
}

## Writing script setup in the host.
## This script will be executed in the Studio EC2 instance
## To down the docker-compose, pull the newest image and 
write_script() {
    echo "Writing setup script to the Studio EC2 instance ..."
    touch /tmp/setup.sh
    cat << EOF > /tmp/setup.sh
#!/bin/bash
echo "Setting up the Studio EC2 instance ..."
aws --region eu-north-1 ecr get-login-password | docker login --username AWS --password-stdin 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio
# Additional deployment commands go here
echo "Pulling image from AWS!"
docker-compose down
docker pull 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest
docker tag 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest $STUDIO_FRONTEND_IMAGE:latest
docker-compose up -d
EOF
    scp_key /tmp/setup.sh $STUDIO_EC2:/tmp/setup.sh
    ssh_custom chmod a+x /tmp/setup.sh
    echo "Setup script written in /tmp/setup.sh"
}

## Setup the host with the needed files
setup_files() {
    echo "Setting up the AWS host with the necessary files ..."
    scp_key ./.env $STUDIO_EC2:/home/ubuntu
}

docker_cleanup() {
    echo "Cleaning up the Studio EC2 instance ..."
    ssh_custom docker stop $(docker ps -a -q)
    ssh_custom docker rm $(docker ps -a -q)
    ssh_custom docker rmi $(docker images -q) -f
    ssh_custom docker system prune
    echo "Docker cleaned up"
}

docker_orchestrate() {
    echo "Removing the image from the Studio EC2 instance ..."
    scp_key ./docker-compose.yml $STUDIO_EC2:/home/ubuntu
    ssh_custom docker rmi 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest
    echo "Image removed and docker compose file transferred"
    scp_key docker-compose up
}

run_image() {
    docker run -d -p 80:80 -p 443:443 --name amanda-studio 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest 
}

# Steps
# setup_files
write_script
# docker_orchestrate
ssh_custom /tmp/setup.sh