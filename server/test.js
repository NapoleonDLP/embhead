const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {

  it('GET /questions should return all questions', async () => {
    const res = await requestWithSupertest.get('/questions');

    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('question');
    expect(res.body[0]).toHaveProperty('answer');
    expect(res.body[0]).toHaveProperty('wrong_answers');

  });
});
