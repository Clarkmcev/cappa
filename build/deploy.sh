#!/bin/bash
## Deployment command to image
echo "Deployment incoming..."
MONITOR_HOST="ubuntu@ec2-16-171-181-182.eu-north-1.compute.amazonaws.com"

# Build image
./build/build.sh

# Push image
./build/push-images.sh

# Setup host
./build/setup-host.sh