# Use the official Golang image as the base image
FROM golang:1.22.0

# Set the working directory inside the container
WORKDIR /app

# Set the working directory inside the container
WORKDIR /app

# Copy the Go module files
COPY ./go.mod .

# Download dependencies
RUN go mod download

# Copy the Go server source code to the working directory
COPY . .

# Build the Go server
RUN go build -o backend .

# Expose port 8080
EXPOSE 60

# Command to run the Go server
CMD ["./backend"]
