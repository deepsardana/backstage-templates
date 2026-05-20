const http = require('http');

const PORT = process.env.PORT || 3000;
const SERVICE_NAME = '${{ values.name }}';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: SERVICE_NAME,
    status: 'running',
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);
});
