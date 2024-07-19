#!/bin/bash

# sourcing variables
source .env
echo "Building the frontend: ${STUDIO_FRONTEND_IMAGE}"
docker buildx build ./frontend --tag ${STUDIO_FRONTEND_IMAGE} --file ./frontend/Dockerfile