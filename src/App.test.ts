import App from './App'
import * as request from 'supertest';


let app = new App().express;

describe('App test', () => {

    it('/ping', async (done) => {
        request(app)
            .get('/ping')
            .set('Accept', 'application/json')
            .expect(200, {
                message: 'Pong'
            }, done);
    });
});