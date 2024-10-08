#!/bin/bash
source .env
ECR_AWS_DIR="$STUDIO_ECR/amanda-studio:latest"

echo "-- Pushing frontend image :"
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 254352282618.dkr.ecr.eu-north-1.amazonaws.com
docker tag $STUDIO_FRONTEND_IMAGE $ECR_AWS_DIR
docker push $ECR_AWS_DIR

if [ $? -ne 0 ]; then
  echo "Error: Docker push failed."
  exit 1
  else
  echo "Success : Image pushed to ECR!"
fi

