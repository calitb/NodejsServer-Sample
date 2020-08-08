# NodeJS Server

## Build and start the servers

```
# Develop
docker-compose -p node_dev up -d
# Production
docker-compose -f docker-compose-prod.yml -p node_prod up -d --build
```

## Test the server

Open the following links:

Development: [http://localhost:3000/query](http://localhost:3000/query) / DB: [http://localhost:8080](http://localhost:8080)

Production: [http://localhost:80/query](http://localhost:80/query) / DB: [http://localhost:8081](http://localhost:8081)

In Adminer use `server=mysql`, `user=calitb`, `pass=12345`

## Install new dependencies in development

See the example on how to add `moment` to the project and get the updated package.json files from the container:

```
cd be
rm package.json package-lock.json
docker exec -it server_dev npm i moment
docker exec -it server_dev cat package.json > package.json
docker exec -it server_dev cat package-lock.json > package-lock.json
docker restart server_dev
docker-compose -p node_dev up -d --build
```

## Enter container CLI

```
# Server Develop
docker exec -it server_dev /bin/ash
# Server Production
docker exec -it server_prod /bin/ash
# MySQL Develop (password 12345)
docker exec -it db_dev mysql -ucalitb -p
# MySQL Production (password 12345)
docker exec -it db_prod mysql -ucalitb -p
```

## Stop the servers

```
# Develop
docker-compose -p node_dev down
# Production
docker-compose -f docker-compose-prod.yml -p node_prod down
```
