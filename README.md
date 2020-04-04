# NodeJS Server

First, create an `.env` file and copy the contents of `.env.sample`.

### Build and start the project

```
# Develop
docker-compose up --build
# Production
docker-compose -f docker-compose-prod.yml up --build
```

### Test the server

Open the following links:

[Development](http://localhost:3031)

[Production](http://localhost:3032)

### Enter container CLI

```
# Develop
docker exec -it backend /bin/ash
# Production
docker exec -it backend_prod /bin/ash
```
