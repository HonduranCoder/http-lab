const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer((socket) => {
  socket.on('data', (data) => {
    const request = parseRequest(data.toString());
    //get(/): plain text 'hi'
    if (request.method === 'GET' && request.path === '/') {
      socket.write(
        createResponse({
          status: '200 OK',
          body: 'hi',
          contentType: 'text/plain',
        })
      );
    }
    //post(/echo): status code 20 and plain text with the request body
		else if()
    //get(/red): html with an h1 and the word red
    else if (request.method === 'GET' && request.path === '/red') {
      socket.write(
        createResponse({
          status: '200 OK',
          body: '<h1>red</h1>',
          contentType: 'text/html',
        })
      );
    }

    //get(/green): html with an h1 and the word green
    else if (request.method === 'GET' && request.path === '/green') {
      socket.write(
        createResponse({
          status: '200 OK',
          body: '<h1>green</h1>',
          contentType: 'text/html',
        })
      );
    }

    //get(/blue): html with an h1 and the word blue
    else if (request.method === 'GET' && request.path === '/blue') {
      socket.write(
        createResponse({
          status: '200 OK',
          body: '<h1>blue</h1>',
          contentType: 'text/html',
        })
      );
    } else {
      socket.end(
        createResponse({
          body: 'Not Found',
          status: '404 Not Found',
          contentType: 'text/plain',
        })
      );
    }
  });
});
//everything else respond with 404 and not found HTML page
module.exports = app;
