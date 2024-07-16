#!/bin/bash

echo "Building the frontend"
docker buildx build . --tag frontend/src --file ../frontend/Dockerfile
