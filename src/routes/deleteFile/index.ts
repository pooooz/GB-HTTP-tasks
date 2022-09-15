import http from 'http';
import { deleteFileByName } from '../../utils';

export const deleteFileHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method === 'DELETE') {
    req.on('data', (chunk) => {
      try {
        const filename = JSON.parse(chunk).filename;
        deleteFileByName(filename);
      } catch (error) {
        res.writeHead(500);
        res.end('Internal server error');
        return;
      }

      res.writeHead(204);
      res.end('Resource deleted successfully');
    });
    return;
  }
  res.writeHead(405);
  res.end('HTTP method not allowed');
};
