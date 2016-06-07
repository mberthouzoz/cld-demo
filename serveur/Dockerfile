FROM node:0.12.14-wheezy

MAINTAINER Michael Berthouzoz

RUN apt-get update

RUN git clone "https://github.com/mberthouzoz/cld-demo.git"

WORKDIR cld-demo/serveur

RUN npm install

EXPOSE 8080

