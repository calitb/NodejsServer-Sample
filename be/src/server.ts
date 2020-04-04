import { Express } from 'express';
import * as http from 'http';

export const createHTTPServer = (app: Express): http.Server => {
  const server = http.createServer(app);
  server.on('error', (error) => console.log('Error: ', error));
  server.on('listening', () => console.log(`Listening localhost:${process.env.HTTP_PORT}`));
  return server;
};
