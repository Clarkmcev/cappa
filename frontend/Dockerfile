# Step 1: Use an official Node.js runtime as a parent image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy the rest of your application's code
COPY . .

# Step 6: Build your app
RUN npm run build

# Step 7: Install serve or any similar package to serve your static files
RUN npm install -g serve

# Step 8: Define the network port that this container will listen on at runtime.
EXPOSE 5000

# Step 9: Run your app using serve
CMD ["serve", "-s", "build", "-l", "5000"]