# librino
super small books manager

## DB
Postgres

### Start the container
```sh
cd db
docker build -t librino-db .
```

## BACKEND
Express + Prisma

### Installation
```sh
npm install
```
### Initialize DB
```sh
npm run migrate
```
### Run
```sh
npm run start
```

## FRONTEND
Angular + Angular Material
### Installation
```sh
npm install
```
### Run

```sh
npm run build
npm run serve
```

## Docker - Containerized deploy

### Start the container
```sh
docker-compose up
```
### Initialize the db
```sh
docker exec -it librino-backend '/bin/sh'
npm run migrate
```
The containers are working, but i was not able to disable cors for local testing
