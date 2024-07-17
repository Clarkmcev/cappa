#!/bin/bash
# echo "-- Pushing backend image :"
# Do some magic

STUDIO_AWS="ubuntu@ec2-52-90-128-43.compute-1.amazonaws.com"
CONTAINER_AWS="254352282618.dkr.ecr.eu-north-1.amazonaws.com/amanda-studio:latest"

echo "-- Pushing frontend image :"
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 254352282618.dkr.ecr.eu-north-1.amazonaws.com
docker tag cappa-caddy $CONTAINER_AWS
docker push $CONTAINER_AWS

# sudo scp -i ~/.ssh/studio.pem -r ./cappa ./cappa ubuntu@ec2-52-90-128-43.compute-1.amazonaws.com:/home/ubuntu
