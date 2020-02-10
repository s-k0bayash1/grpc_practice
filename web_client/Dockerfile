FROM node:13.8.0-slim

WORKDIR /app
COPY . .
RUN yarn install
ENTRYPOINT ["yarn", "start"]