FROM node:12.13.0-alpine AS builder

RUN apk --no-cache add python make g++ curl bash

COPY . .

RUN yarn install && yarn run build

#RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash
#RUN rm -rf node_modules && yarn install --production && ./bin/node-prune
RUN rm -rf node_modules && yarn install --production

FROM node:12.13.0-alpine
WORKDIR /app
COPY --from=builder node_modules ./node_modules
COPY --from=builder dist ./dist
COPY --from=builder package.json .
COPY --from=builder yarn.lock .
COPY --from=builder entrypoint.sh .

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]
