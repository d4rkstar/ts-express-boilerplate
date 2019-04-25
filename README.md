# Typescript Express Boilerplate

This boilerplate is a generic "template" for a web application based on
following components:

Web framework
- express 4
- typeorm

Logging:
- winston

Utilities:
- async
- dotenv
- underscore

Testing:
- jest
- supertest

## Installation
1. Install dependencies
```
# npm -i
```

2. Build sources
```
# npm run build
```

3. If you need, create a database

4. Copy .env.example to .env

5. Edit .env file and put required variables 

6. Migrate database

7. To run tests
```
# npm run test
```

8. To start
```
# npm start
```

## Docker

1. Build image

```
# docker build -t ts-express-boilerplate .
```

2. Run image :)

``` 
# docker run -d -p 3000:3000 --name ts-express-boilerplate ts-express-boilerplate:latest
```

## Coding guidelines

### Some useful references:

- *TypeORM* - <http://typeorm.io/#/>
- *TypeScript Deep Dive* - <https://basarat.gitbooks.io/typescript/content/>
- *Tutorial on Typescript* - <https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/>
- *Cheatsheet* - <https://www.sitepen.com/blog/typescript-cheat-sheet>

### For testing:

- *Jest* - <https://jestjs.io/docs>
- *Supertest* - <https://github.com/visionmedia/supertest>
- *Superagent* - <http://visionmedia.github.io/superagent/#post-put-requests>
- *Tutorial typescript api* - <https://tutorialedge.net/typescript/testing-typescript-api-with-jest/>

### Deploy to openshift
- *Automatic build and deploy* - <http://www.admin-magazine.com/Archive/2018/47/Automatic-build-and-deploy-with-OpenShift-and-GitLab-CI>
