#!/usr/bin/env bash

function usage() {
    echo "
Usage: $(basename $0) <name> <description> <author>
    "
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

# Sanitize JSON
NAME=`echo -n "$1" | jq -Rsa .`
DESCRIPTION=`echo -n "$2" | jq -Rsa .`
AUTHOR=`echo -n "$3" | jq -Rsa .`
GIT_URL=`git remote get-url origin`
REMOTE=`echo -n $GIT_URL | jq -Rsa .`

if [[ "$REMOT2E" == *"ts-express-boilerplate.git"* ]]; then
echo "
Please initialize git repository with a remote url.

git init .
git remote set-url origin <url>
"
  exit 1
fi



tmp=$(mktemp)
cp package.json package.json.orig
jq '.author='"$AUTHOR"'|.name='"$NAME"'|.description='"$DESCRIPTION"'|.repository.url='"$REMOTE"'' package.json > "$tmp" && mv "$tmp" package.json
if [ "$?" == "0" ]; then
  echo "File package.json was updated!"

  # remove circleci
  echo "💥 Removing CircleCI original dir"
  rm -rf .circleci
  echo "💥 Removing Art original dir"
  rm -rf art
  echo "🖋️ Generating new README.md"
  rm -rf README.md
  echo "
  # $1
  $2

  by $3
" > README.md

  echo "🔥 Republish Completed!"

else
  echo "⚠️ Some error occurred. No file was updated"
  mv -f package.json.orig package.json
  exit 1
fi

if [ -f "$tmp" ]; then
  rm -f "$tmp"
fi
exit 0
