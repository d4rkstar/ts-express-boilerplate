# Typescript Express Boilerplate

![CircleCI (all branches)](https://img.shields.io/circleci/project/github/d4rkstar/ts-express-boilerplate.svg)

This boilerplate is a generic "template" for a web application based on
following components:

Web framework
- [express 4](https://expressjs.com/)
- [typeorm](https://typeorm.io/)

Logging:
- [winston](https://github.com/winstonjs/winston)

Utilities:
- [async](https://caolan.github.io/async/v3/)
- [dotenv](https://github.com/motdotla/dotenv)
- [lodash](https://lodash.com/docs/4.17.15)

Testing:
- [jest](https://jestjs.io/)
- [supertest](https://github.com/visionmedia/supertest)
- [sinon](https://sinonjs.org/)

Linting:
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

## Installation
1. Install dependencies

```bash
$ npm -i
```

2. Build sources

```bash
$ npm run build
```

3. If you need, create a database

4. Copy .env.example to .env

5. Edit .env file and put required variables 

6. Migrate database

7. To run tests

```bash
$ npm run test
```

8. To start

```bash
$ npm start
```

## Docker

1. Build image

```bash
$ docker build -t ts-express-boilerplate .
```

2. Run image :)

```
$ docker run -d -p 3000:3000 --name ts-express-boilerplate ts-express-boilerplate:latest
```

## Coding guidelines

I suggest reading this useful article:

[Using ESLint and Prettier in a TypeScript Project](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

To activate ESlint in Webstorm, follow this link:

[ESLint in Webstorm](https://www.jetbrains.com/help/webstorm/eslint.html)

To use ESlint from command line:

```bash
$ eslint --fix --ignore-path .eslintignore src/*.ts
```


### Some useful references:

- *TypeORM* - <http://typeorm.io/#/>
- *TypeScript Deep Dive* - <https://basarat.gitbooks.io/typescript/content/>
- *Tutorial on Typescript* - <https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/>
- *Cheatsheet* - <https://www.sitepen.com/blog/typescript-cheat-sheet>

### For testing:

- *Jest* - <https://jestjs.io/docs>
- *Supertest* - <https://github.com/visionmedia/supertest>
- *Superagent* - <http://visionmedia.github.io/superagent/#post-put-requests>
- *Sinon* - <https://sinonjs.org/>
- *Tutorial typescript api* - <https://tutorialedge.net/typescript/testing-typescript-api-with-jest/>

### Deploy to openshift
- *Automatic build and deploy* - <http://www.admin-magazine.com/Archive/2018/47/Automatic-build-and-deploy-with-OpenShift-and-GitLab-CI>
