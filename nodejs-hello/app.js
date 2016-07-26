const http = require('http');

const app = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>');

});

app.listen(3000, () => console.log(`Server Running`));
