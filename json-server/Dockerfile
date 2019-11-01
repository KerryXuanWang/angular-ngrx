FROM node:10.16.3-alpine

LABEL authors="chuduyunhuan@gmail.com"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry https://registry.npm.taobao.org \
  && npm i

COPY . .

CMD ["npm", "start"]





