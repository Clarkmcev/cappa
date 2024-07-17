#!/bin/bash

echo "Building the frontend"
cd ./../
docker-compose up
# docker buildx build . --tag frontend/src --file ../frontend/Dockerfile
