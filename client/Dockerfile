FROM coreos/apache

MAINTAINER Michaël Berthouzoz

RUN apt-get update

RUN apt-get install -y git

RUN apt-get install -y nodejs npm

RUN apt-get install -y curl wget

RUN npm install -g grunt-cli

RUN npm install --global bower

RUN git clone "https://github.com/mberthouzoz/cld-demo.git"

WORKDIR cld-demo/client

RUN npm install

RUN bower install

RUN grunt build

RUN cp client/app/dist/* /var/www/
