import express from 'express';
import Server from 'next/dist/next-server/server/next-server';

export default function createServer(app: Server) {
  const server = express();
  const handle = app.getRequestHandler();

  server.all(
    '*',
    (req: express.Request, res: express.Response) => handle(req, res),
  );

  return server;
}
