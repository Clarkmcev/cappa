FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY .  /usr/src/app

RUN npm run build
CMD ["npm", "run", "dev"]

# # Step 2: Set up Caddy to serve the built application
# FROM caddy:latest

# # Copy built assets from the builder stage
# COPY /usr/src/app/dist /srv
# # COPY Caddyfile /etc/caddy/Caddyfile