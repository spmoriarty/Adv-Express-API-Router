import request from 'supertest';
import app from './app.js';


it('#GET should return all from a route', async () => {
  const res = await request(app).get('/api/v1/candies');
  expect(res.status).toBe(200);
});

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});


it('#POST should add a new object to the array', async () => {
  const newKandy = {
    name: 'Butterfinger',
    type: 'CandyBar',
  };
  const res = await request(app).post('/api/v1/candies').send(newKandy);
  expect(res.status).toBe(204);
});

it('#Put /candies returns a 200', async () => {
  const candy = [{ name: 'Marsbar', type: 'chocolate' }];
  const res = await request(app).put('/api/v1/candies').send(candy);
  expect(res.status).toBe(200);
});

it('#DELETE should return a status of 204', async () => {
  const res = await request.agent(app).delete('/api/v1/candies');
  expect(res.status).toBe(204);
})

