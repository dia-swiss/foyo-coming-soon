FROM node:14.17-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production
COPY . .

EXPOSE 1337

CMD ["yarn", "start"]