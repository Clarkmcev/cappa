studio() {
  echo "Connecting via ssh to $STUDIO_AWS"
  ssh -i $SECRET_PEM_PATH "$STUDIO_EC2"
}

