#!/bin/bash

source .env
# echo "Building image : ${STUDIO_FRONTEND_IMAGE}"
# docker buildx build ./frontend --tag ${STUDIO_FRONTEND_IMAGE} --file ./frontend/Dockerfile
# echo "Success : Image ${STUDIO_FRONTEND_IMAGE} built!"

docker-compose build