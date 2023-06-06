FROM node:18.16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN sed -i "s/localhost/db/" .env;
RUN sed -i "s/localhost/db/" index.ts;
RUN npm run build
# RUN npm run migrate

CMD ["npm", "run", "start"]
# CMD ["tail", "-f", "/dev/null"]
