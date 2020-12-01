#!/bin/sh
set -e
./node_modules/.bin/typeorm migration:run --f config/ormconfig.json
exec yarn run start "$@"
