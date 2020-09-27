FROM node:lts-alpine as builder

COPY . .
RUN apk --no-cache add python make g++ curl bash
RUN npm install typescript -g
RUN npm install && npm run build
RUN rm -rf node_modules && npm install --only=prod
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash && \
./bin/node-prune && rm -rf ./bin/node-prune

FROM node:lts-alpine

COPY --from=builder node_modules ./node_modules
COPY --from=builder dist ./dist
COPY --from=builder package.json .
COPY --from=builder package-lock.json .
COPY --from=builder entrypoint.sh .

EXPOSE 3000
ENTRYPOINT [ "./entrypoint.sh" ]
USER node
