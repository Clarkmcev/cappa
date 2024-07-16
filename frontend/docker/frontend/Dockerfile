FROM node:22.4.1
WORKDIR /app
COPY ./package.json .
RUN npm install
# COPY ./dist dist
COPY . .
RUN npm run build