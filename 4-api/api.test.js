const request = require('supertest');
const app = require('./api')
describe('GET /', function () {
    it('get data with token', async function () {
        await request(app)
            .get('/')
            .set('token', 'my-secret-token')
            .expect(200)
            .expect(res => {
                expect(res.body).toStrictEqual(
                    {
                        "data": [
                            {
                                "id": expect.any(Number),
                                "title": "foo",
                            },
                            {
                                "id": expect.any(Number),
                                "title": "bar",
                            },
                        ],
                        "meta": expect.any(Object),
                    }
                )
            })
    });
});