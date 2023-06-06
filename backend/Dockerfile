FROM node:18.16-alpine3.18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm run build
RUN npm run migrate

EXPOSE 80
CMD ["npm", "run", "start"]
