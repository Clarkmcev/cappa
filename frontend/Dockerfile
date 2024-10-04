FROM node:22.4.1 as build-stage

WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . .
RUN npm run build

FROM caddy:2.2.1-alpine

RUN mkdir -p /www
COPY --from=build-stage /app/dist /www
COPY ./Caddyfile.dev /etc/caddy/Caddyfile
RUN caddy fmt --overwrite /etc/caddy/Caddyfile --data-dir /etc/caddy