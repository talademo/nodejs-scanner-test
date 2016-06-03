FROM node:latest

RUN apt-get update

WORKDIR /website

ADD simpleapp/ /website/simpleapp

EXPOSE 8888
CMD ["/usr/local/bin/node", "simpleapp/index.js"]
