FROM node:16-alpine AS builder

RUN apk --no-cache add python3 make g++ curl bash

COPY . .

RUN yarn install && yarn run build && \
    rm -rf node_modules && yarn install --production

FROM node:16-alpine
WORKDIR /app
COPY --from=builder node_modules ./node_modules
COPY --from=builder dist ./dist
COPY --from=builder package.json .
COPY --from=builder yarn.lock .

EXPOSE 3000

CMD [ "yarn","run","start" ]
