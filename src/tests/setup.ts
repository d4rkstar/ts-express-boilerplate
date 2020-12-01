// Example
import { createConnection, getConnection } from 'typeorm';
import * as dotenv from 'dotenv'

beforeAll(async () => {
    dotenv.config();
    if (process.env.USE_TYPEORM==='true') {
        const connection = await createConnection();
    }

});

afterAll(async () => {
    dotenv.config();
    if (process.env.USE_TYPEORM==='true') {
        await getConnection().close();
    }

});
