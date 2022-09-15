import * as http from 'http';
import { RequestListener } from 'http';

import {
  getFilenamesHandler,
  createFileHandler,
  deleteFileHandler,
  redirectHandler
} from './routes';

const host = 'localhost';
const port = 3000;

const requestListener: RequestListener = (req, res) => {
  switch (req.url) {
    case '/getFilenames': {
      getFilenamesHandler(req, res);
      break;
    }
    case '/createFile': {
      createFileHandler(req, res);
      break;
    }
    case '/deleteFile': {
      deleteFileHandler(req, res);
      break;
    }
    case '/redirect': {
      redirectHandler(req, res);
      break;
    }
    case '/redirected': {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Hello redirected</h1>');
      res.end();
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
