# NodeJS Server

### Build and start the servers

```
# Develop
docker-compose -p node_dev up -d
# Production
docker-compose -f docker-compose-prod.yml -p node_prod up -d
```

### Test the server

Open the following links:

[Development](http://localhost:3000/query) / [DB Development](http://localhost:8080)

[Production](http://localhost:80/query) / [DB Production](http://localhost:8081)

In Adminer use `server=mysql`, `user=calitb`, `pass=12345`

### Enter container CLI

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

### Stop the servers

```
# Develop
docker-compose -p node_dev down
# Production
docker-compose -f docker-compose-prod.yml -p node_prod down
```
