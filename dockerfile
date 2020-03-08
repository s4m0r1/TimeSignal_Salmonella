FROM node:12.16.1-buster
ENV APP_ROOT /app/

WORKDIR ${APP_ROOT}

COPY package*.json ${APP_ROOT}
RUN npm i

COPY . ${APP_ROOT}

RUN npm run build