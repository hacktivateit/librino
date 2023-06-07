FROM node:18.16-alpine3.18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN sed -i "s/localhost/backend/" ./src/app/services/auth.service.ts
RUN sed -i "s/localhost/backend/" ./src/app/services/book.service.ts
RUN sed -i "s/localhost/backend/" ./src/app/services/user.service.ts
RUN npm run build

# Stage 2: Serve the compiled application with Nginx
FROM nginx:1.25.0-alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

