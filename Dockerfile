FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY .npmrc ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000