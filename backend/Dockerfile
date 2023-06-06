FROM node:18.16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN sed -i "s/localhost/db/" .env;
RUN sed -i "s/localhost/db/" index.ts;
RUN npm run build

CMD ["npm", "run", "start"]
