FROM mysql:8.0.21

LABEL maintainer="Carlos Thurber B."

COPY ./config/my.cnf /etc/mysql/conf.d
COPY ./scripts/dump.sql docker-entrypoint-initdb.d/dump.sql