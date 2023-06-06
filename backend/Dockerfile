FROM node:18.16-alpine3.18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN sed -i "s/localhost/db/" .env;
RUN npm run build
RUN npm run migrate
# seed

EXPOSE 80
CMD ["npm", "run", "start"]
