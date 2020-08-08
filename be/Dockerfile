FROM node:13.1-alpine
LABEL maintainer="Carlos Thurber B."
ENV NODE_ENV develop
WORKDIR /usr/app
EXPOSE 3000
COPY . ./
RUN npm i
CMD ["npm", "run", "dev"]