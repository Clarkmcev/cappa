#!/bin/bash
# echo "-- Pushing backend image :"
# Do some magic

STUDIO_AWS="ubuntu@ec2-52-90-128-43.compute-1.amazonaws.com"

echo "-- Pushing frontend image :"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 254352282618.dkr.ecr.us-east-1.amazonaws.com
docker tag frontend:latest 254352282618.dkr.ecr.us-east-1.amazonaws.com/frontend:latest
docker push 254352282618.dkr.ecr.us-east-1.amazonaws.com/frontend:latest
