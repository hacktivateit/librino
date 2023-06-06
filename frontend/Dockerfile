# Stage 1: Build the Angular application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm run build

# Stage 2: Serve the compiled application with Nginx
FROM nginx:1.21.0-alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

