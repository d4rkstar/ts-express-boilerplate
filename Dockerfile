FROM node:11.2-slim

WORKDIR /app

COPY . .

EXPOSE 3000

COPY .env.prod .env

RUN npm install && npm run build

RUN npm install --production

CMD [ "npm", "run", "start" ]

USER node