FROM node:14.15.5-alpine

WORKDIR /usr/app

COPY package.json ./
RUN yarn

COPY . .

CMD ["yarn", "start"]