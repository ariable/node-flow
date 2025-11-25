const request = require('supertest');
const app = require('../src/index');

describe('GET /health', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('GET /sum', () => {
  it('should return sum of a and b', async () => {
    const res = await request(app).get('/sum?a=1&b=2');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 3 });
  });

  it('should return 400 for invalid params', async () => {
    const res = await request(app).get('/sum?a=foo&b=2');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});

