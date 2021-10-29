/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../lib/app');
//const parseRequest = require("../lib/utils/parseRequest");

describe('app routes', () => {
  it('receive / route using GET', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('hi');
  });

  it('receive /red route using GET', async () => {
    const response = await request(app).get('/red');
    expect(response.text).toEqual('<h1>red</h1>');
  });

  it('receive /green route using GET', async () => {
    const response = await request(app).get('/green');
    expect(response.text).toEqual('<h1>green</h1>');
  });

  it('receive /blue route using GET', async () => {
    const response = await request(app).get('/blue');
    expect(response.text).toEqual('<h1>blue</h1>');
  });
  it('echoes request body', async () => {
    const response = await request(app).post('/echo').send('echoo');
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('echoo');
  });
});
