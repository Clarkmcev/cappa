#!/bin/bash
source .env

scp_key() {
    scp -i $SECRET_PEM_PATH "$@"
}

ssh_custom() {
    echo "Connecting to the Studio EC2 instance: $1"
    ssh -i "$SECRET_PEM_PATH" "$@"
}

# scp_key ./docker-compose.yml $STUDIO_EC2:/home/ubuntu
scp_key ./.env $STUDIO_EC2:/home/ubuntu
# ssh_custom "$STUDIO_EC2"