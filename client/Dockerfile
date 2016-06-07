FROM coreos/apache

MAINTAINER Michaël Berthouzoz

RUN apt-get update

RUN git clone "https://github.com/mberthouzoz/cld-demo.git"

WORKDIR cld-demo/client

RUN npm install

RUN bower install

RUN grunt build

RUN cp client/app/dist/* /var/www/
