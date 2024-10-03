#!/bin/bash
source .env
source ~/.bashrc

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

write_script() {
    echo "Writing setup script to the Studio EC2 instance ..."
    touch /tmp/setup.sh
    cat << EOF > /tmp/setup.sh
#!/bin/bash
echo "Setting up the Studio EC2 instance ..."
aws --region eu-north-1 ecr get-login-password | docker login --username AWS --password-stdin 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio
# Additional deployment commands go here
echo "Pulling image from AWS!"
docker pull 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest
EOF
    scp_key /tmp/setup.sh $STUDIO_EC2:/tmp/setup.sh
    ssh_custom chmod a+x /tmp/setup.sh
    echo "Setup script written in /tmp/setup.sh"
}   

docker_cleanup() {
    echo "Cleaning up the Studio EC2 instance ..."
    ssh_custom docker stop $(docker ps -a -q)
    ssh_custom docker rm $(docker ps -a -q)
    ssh_custom docker rmi $(docker images -q) -f
    ssh_custom docker system prune
    echo "Docker cleaned up"
}

run_image() {
    docker run -d -p 80:80 -p 443:443 --name amanda-studio 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest 
}

# Steps
scp_key ./.env $STUDIO_EC2:/home/ubuntu
write_script
ssh_custom /tmp/setup.sh