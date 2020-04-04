FROM node:10.12.0-alpine

LABEL maintainer="Carlos Thurber B."

ENV NODE_ENV develop
EXPOSE 3000

WORKDIR /usr/app
COPY package.json /usr/app/
COPY package-lock.json /usr/app/
COPY tsconfig.json /usr/app/
RUN npm i

CMD npm run dev