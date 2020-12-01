import App from './App';
import * as dotenv from 'dotenv';
import { Connection, createConnection } from 'typeorm';
import { logger } from './lib/Logger';

dotenv.config();
const port = process.env.EXPRESS_PORT || 3000;

async function openConnection(): Promise<Connection> {
    if (process.env.USE_TYPEORM === 'true') {
        return await createConnection();
    }
    return null;
}

openConnection().then((connection): void => {
    const app = new App();
    if (connection) {
        logger.info('Connected to %s', connection.name);
    }
    return app.express.listen(port, (err: string): void => {
        if (err) {
            logger.error('error %s', err);
        }

        logger.info('Listening on port %d', port);
    });
});
