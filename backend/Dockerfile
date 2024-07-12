# Step 1: Use the official Go image with a specific version tag, e.g., 1.18
FROM golang:1.18 AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the local package files to the container's workspace
COPY . .

# Step 4: Build your Go app as a static binary
# Assuming your main package is located in the main.go file
# and you want to output the binary to /app/api
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o api .

# Step 5: Use a lightweight base image; here we use alpine
FROM alpine:latest  

# Step 6: Set the working directory in the new image
WORKDIR /root/

# Step 7: Copy the binary from the builder stage to the current stage
COPY --from=builder /app/api .

# Step 8: Expose the port your app runs on
EXPOSE 8080

# Step 9: Run the binary executable
CMD ["./api"]