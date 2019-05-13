export const options = {
    swaggerDefinition: {
        // Like the one described here: https://swagger.io/specification/#infoObject
        info: {
            title: 'Boilerplate for express and typescript',
            version: '1.0.0',
            description: 'Just another Boilerplate',
        },
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    apis: ['dist/App.js'],
    tags: [
        {
            name: 'test',
            description: 'Test route',
        },
    ],
};
