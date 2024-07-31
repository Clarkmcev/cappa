
# ssh connection
studio() {
  echo "Connecting via ssh to $STUDIO_AWS, secret $SECRET_PEM_PATH, $STUDIO_EC2"
  ssh -i $SECRET_PEM_PATH "$STUDIO_EC2"
}

# sourcing
alias src-studio='. ~/code/cappa/.env'
