import http from 'http';
import { getFilenames } from '../../utils';

export const getFilenamesHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method === 'GET') {
    try {
      const fileNames = getFilenames('./src/assets/files');
      res.end(fileNames.join(','));
      return;
    } catch (error) {
      res.writeHead(500);
      res.end('Internal server error');
      return;
    }
  }
  res.writeHead(405);
  res.end('HTTP method not allowed');
};
