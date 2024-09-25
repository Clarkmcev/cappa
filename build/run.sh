#!/bin/bash
docker run -d -p 80:80 -p 443:443 --name paintings-website-container "$STUDIO_FRONTEND_IMAGE"