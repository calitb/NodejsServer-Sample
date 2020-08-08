import * as http from 'http';

import { Express } from 'express';

export const createHTTPServer = (app: Express): http.Server => {
  const server = http.createServer(app);
  server.on('error', (error) => console.log('Error: ', error));
  server.on('listening', () => console.log(`Server started`));
  return server;
};
