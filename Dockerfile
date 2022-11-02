FROM node:16-alpine AS builder

RUN apk --no-cache add python3 make g++ curl bash

COPY . .

RUN yarn install && yarn run build

#RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash
#RUN rm -rf node_modules && yarn install --production && ./bin/node-prune
RUN rm -rf node_modules && yarn install --production

FROM node:16-alpine
WORKDIR /app
COPY --from=builder node_modules ./node_modules
COPY --from=builder dist ./dist
COPY --from=builder package.json .
COPY --from=builder yarn.lock .
COPY --from=builder entrypoint.sh .
COPY --from=builder .env.example .env

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]
