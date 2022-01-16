FROM node:14.17-slim

WORKDIR /srv/app

COPY package.json yarn.lock ./

RUN yarn install --production
COPY . .


RUN NODE_ENV=production yarn build

EXPOSE 1337

CMD ["yarn", "start"]