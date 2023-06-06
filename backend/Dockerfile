# Stage 1: Build the Angular application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm run build
RUN npm run migrate

EXPOSE 80
CMD ["npm", "run", "start"]
