#!/bin/bash

echo "Deployment incoming"

MONITOR_HOST="ubuntu@ec2-16-171-181-182.eu-north-1.compute.amazonaws.com"

scp_mon() {
  scp -i "~/.ssh/augsburg-clark.pem" "$@"
}

ssh_mon() {
  ssh -i "~/.ssh/augsburg-clark.pem" "$@"
}

