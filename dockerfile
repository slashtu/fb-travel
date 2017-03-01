FROM node:7.6.0

RUN npm install webpack -g

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json /usr/src/app/
RUN npm install

# Bundle app source
ADD . /usr/src/app

EXPOSE 8000

CMD [ "npm", "run", "uat" ]

