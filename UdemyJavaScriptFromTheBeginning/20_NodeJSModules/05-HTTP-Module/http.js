const http = require('http');
const fs = require('fs');

const posts = [
  {id: 1, title: 'Post 1', body: 'Content of post 1'},
  {id: 2, title: 'Post 2', body: 'Content of post 2'},
  {id: 3, title: 'Post 3', body: 'Content of post 3'},
]

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    fs.readFile('index.html', (err, file) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1>Sorry we have a problem</h1>');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
    })
  } else if (url === '/api/posts') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ success: true, data: posts }));
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Page Not Found</h1>');
  }

  response.end('Hello');
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});