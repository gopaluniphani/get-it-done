FROM node:latest

# set working directory
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app/package.json
RUN npm install --silent

# start app
CMD ["npm", "run", "dev"]