import * as express from 'express';
import { logger, weblogger } from './lib/Logger';

class App {
    public express;

    public constructor() {
        logger.info('Starting App');

        this.express = express();

        this.express.use(weblogger);
        this.mountRoutes();
    }

    private async mountRoutes(): Promise<void> {
        const router = express.Router();

        router.get('/ping', (req, res): void => {
            const result = { message: 'Pong' };
            res.json(result);
        });

        this.express.use('/', router);
    }
}

export default App;
