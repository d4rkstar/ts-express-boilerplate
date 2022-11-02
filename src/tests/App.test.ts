import request from 'supertest';
import {app} from "./setup";

describe('App tests', () => {

    it('Ping', async () => {
        const response = await request(app)
          .get('/ping')
          .set('Accept', 'application/json');
        expect(response.status).toEqual(204);

    });

    it('/favicon.ico', async () => {
        const response = await request(app)
            .get('/favicon.ico')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(204);
    });
});
