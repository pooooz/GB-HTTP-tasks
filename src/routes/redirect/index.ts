import http from 'http';

export const redirectHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method === 'GET') {
    res.writeHead(302, {
      Location: '/redirected'
    });
    res.end('/redirected');
    return;
  }
  res.writeHead(405);
  res.end('HTTP method not allowed');
};
