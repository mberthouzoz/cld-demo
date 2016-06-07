FROM centos/httpd

MAINTAINER Michaël Berthouzoz

# Install Node.js and other dependencies
RUN yum -y update

#RUN yum -y install git

#RUN yum -y install epel-release
#RUN yum -y install nodejs
#RUN yum -y install npm

#RUN npm install -g grunt-cli

#RUN npm install --global bower

RUN git clone "https://github.com/mberthouzoz/cld-demo.git"

WORKDIR cld-demo/client

#RUN npm install

#RUN bower install --allow-root

#RUN grunt build --force

RUN cp -R ./dist/* /var/www/

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
