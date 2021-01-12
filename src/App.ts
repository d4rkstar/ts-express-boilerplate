import * as express from 'express';
import { logger, weblogger } from './lib/Logger';
import { BaseRouter } from './routes';

class App {
    public express;

    public constructor() {
        logger.info('Starting App');

        this.express = express();

        this.express.use(weblogger);

        this.mountRoutes().then((): void => {
            logger.info('Routes ready!');
        });
    }

    private async mountRoutes(): Promise<void> {
        const router = BaseRouter.init(express.Router());
        this.express.use('/', router);
    }
}

export default App;
