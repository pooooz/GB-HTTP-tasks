import http from 'http';
import { createFile } from '../../utils';

export const createFileHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method === 'PUT') {
    req.on('data', (chunk) => {
      try {
        const filename = JSON.parse(chunk).filename;
        createFile(filename);
      } catch (error) {
        res.writeHead(500);
        res.end('Internal server error');
        return;
      }

      res.writeHead(201);
      res.end('Resource created');
    });
    return;
  }
  res.writeHead(405);
  res.end('HTTP method not allowed');
};
