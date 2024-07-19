#!/bin/bash
STUDIO_AWS="ubuntu@ec2-52-90-128-43.compute-1.amazonaws.com"
ECR_AWS="254352282618.dkr.ecr.eu-north-1.amazonaws.com"
ECR_AWS_DIR="$ECR/cappa-caddy:latest"

echo "-- Pushing frontend image:"
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 254352282618.dkr.ecr.eu-north-1.amazonaws.com
docker tag cappa-caddy $ECR_AWS_DIR
docker push $ECR_AWS_DIR

# sudo scp -i ~/.ssh/studio.pem -r ./cappa ./cappa ubuntu@ec2-52-90-128-43.compute-1.amazonaws.com:/home/ubuntu