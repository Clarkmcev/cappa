#!/bin/bash
source .env
source ~/.bashrc

scp_key() {
    echo "Transfering to the Studio EC2 instance ..."
    scp -i $SECRET_PEM_PATH "$@"
}

ssh_custom() {
    echo "Connecting to the Studio EC2 instance: $1"
    ssh -i "$SECRET_PEM_PATH" "$STUDIO_EC2" "$@"
}

# Copy the necessary files to the Studio EC2 instance
scp_key ./docker-compose.yml $STUDIO_EC2:/home/ubuntu
scp_key ./.env $STUDIO_EC2:/home/ubuntu
scp_key ./Caddyfile $STUDIO_EC2:/home/ubuntu

# Removing the docker images
echo "Removing docker images ..."
ssh_custom docker rmi $(docker images -q)

# Pulling images from AWS ECR
echo "Pulling images from AWS ECR ..."
ssh_custom aws --region eu-north-1 ecr get-login-password | docker login --username AWS --password-stdin 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio
ssh_custom docker pull 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest
# docker tag 254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest $STUDIO_FRONTEND_IMAGE