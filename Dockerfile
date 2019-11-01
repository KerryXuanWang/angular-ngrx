# Stage 1 build angular app
FROM node:10.16.3-alpine as builder

LABEL authors="chuduyunhuan@gmail.com"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry https://registry.npm.taobao.org \
  && npm i

COPY . .

RUN npm run build

# Stage 2 set nginx server
FROM nginx:stable-alpine

LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/dist/angular-ngrx/ .




