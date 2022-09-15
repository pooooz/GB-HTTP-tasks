import * as http from 'http';
import { RequestListener } from 'http';

const host = 'localhost';
const port = 3000;

const getRouter = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url === '/get') {
    res.writeHead(200);
    res.end('success');
  }
  res.writeHead(404);
  res.end('not found');
};

const requestListener: RequestListener = (req, res) => {
  switch (req.url) {
    case '/get': {
      getRouter(req, res);
      break;
    }
    default: {
      res.writeHead(404);
      res.end('Not found');
    }
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on port: ${port}`);
});
