import * as express from 'express';
import swaggerUi = require('swagger-ui-express');
import swaggerJsdoc = require('swagger-jsdoc');
import { logger, weblogger } from './lib/Logger';
import * as swaggerDef from './lib/swaggerDef';

class App {
    public express;

    public constructor() {
        logger.info('Starting App');

        this.express = express();

        this.express.use(weblogger);
        const specs = swaggerJsdoc(swaggerDef.options);
        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

        this.mountRoutes().then(
            (): void => {
                logger.info('Routes ready!');
            },
        );
    }

    private async mountRoutes(): Promise<void> {
        const router = express.Router();

        /**
         * @swagger
         * /ping:
         *   get:
         *     description: Just Ping!
         *     tags:
         *       - "test"
         *     produces:
         *       - "application/json"
         *     responses:
         *       200:
         *         description: "Pong!"
         */
        router.get(
            '/ping',
            (req, res): void => {
                let result = { message: 'Pong' };
                res.json(result);
            },
        );

        this.express.use('/', router);
    }
}

export default App;
