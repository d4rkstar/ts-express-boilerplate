![This is an image](art/social-media.jpg)
# Typescript Express Boilerplate

![CircleCI (all branches)](https://img.shields.io/circleci/project/github/d4rkstar/ts-express-boilerplate.svg)

This boilerplate is a generic "template" for a web application based on
following components:

#### :bucket: Web framework
- [express 4](https://expressjs.com/)

#### :dna: Orm
- [typeorm](https://typeorm.io/)

#### :roll_of_paper: Logging:
- [winston](https://github.com/winstonjs/winston)

#### :toolbox: Utilities:
- [async](https://caolan.github.io/async/v3/)
- [dotenv](https://github.com/motdotla/dotenv)
- [lodash](https://lodash.com/docs/4.17.15)

#### :adhesive_bandage: Testing:
- [jest](https://jestjs.io/)
- [supertest](https://github.com/visionmedia/supertest)
- [sinon](https://sinonjs.org/)

#### :toothbrush: Linting:
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

#### :man_artist:Artwork:
- by [faudas](https://www.linkedin.com/in/fausto-d-asero-20953835)


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

## Info
Before start coding, ensure to:
- Remove the .git folder
- If you need to start a new repo, do a ``git init .`` inside the project folder and add files with ``git add .``
- Adjust the package.json author and remote git repo
- Run yarn install to fill node_modules
- Copy .env.example to .env and adjust variables at your needs

If you need to use database and typeorm:
- Set USE_TYPEORM to the value of 1 in .env
- Add a database if you need it and configure datasources (under then datasources folder)

If you don't need to use database and typeorm:
- Set USE_TYPEORM to the value of 0 in .env

To add new routes and routers, check the ``App::mountRoutes`` method.

It's quite simple to add new routes!

## Docker

1. Build image

```bash
$ docker build -t ts-express-boilerplate .
```

2. Run image :)

```bash
$ docker run -d -p 3000:3000 --name ts-express-boilerplate ts-express-boilerplate:latest
```

## Migrations :-)

Create an entity
```bash
$ yarn run typeorm entity:create src/entities/User
```

and modify at your needs. Then generate migration for this Entity:
```bash
$ yarn run  typeorm migration:generate -d dist/Datasource.js src/migrations/use
```

Finally run migrations:

```bash
$ yarn run migrate-dev
```

Info: migrate-dev will build js source before run migrations. If you need to run migrations in prod (!!), you can
consider the migrate script.
Adjust datasources at your needs.

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


