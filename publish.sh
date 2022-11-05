#!/usr/bin/env bash

function usage() {
    echo -ne "\nUsage:\n\rpublish.sh name description author\n"
}

function testCommand() {
  if ! command -v $1 &> /dev/null
  then
      echo "\n\nPlease install $1 command first!"
      exit 1
  fi
}

testCommand jq
testCommand git

if [ -f package.json.orig ]; then
  echo "Can run this program only once! Restore original package.json.orig before continue"
  exit 1;
fi

if [[ ! $# -eq 3 ]] ; then
    usage
    exit 1
fi

NAME=`echo -n "$1" | jq -Rsa .`
DESCRIPTION=`echo -n "$2" | jq -Rsa .`
AUTHOR=`echo -n "$3" | jq -Rsa .`
GIT_URL=`git remote get-url origin`
REMOTE=`echo -n $GIT_URL | jq -Rsa .`

tmp=$(mktemp)
cp package.json package.json.orig
jq '.author='$AUTHOR'|.name='$NAME'|.description='$DESCRIPTION'|.repository.url='$REMOTE'' package.json > "$tmp" && mv "$tmp" package.json
echo "File package.json was updated!"
exit 0
