import App from './App'
import * as dotenv from 'dotenv'
import {createConnection} from "typeorm";
import {logger} from "./lib/Logger";

dotenv.config();
const port = process.env.EXPRESS_PORT || 3000;

async function openConnection() {
    if (process.env.USE_TYPEORM=='true') {
        return await createConnection();
    }
    return true
}

openConnection().then(connection => {
    let app = new App();

    app.express.listen(port, (err) => {
        if (err) {
            return logger.error('error %s', err);
        }

        return logger.info('Listening on port %d', port);
    });

});
