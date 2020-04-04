import express from 'express';
import { createHTTPServer } from './server';

import * as bodyParser from 'body-parser';

const app = express();

app.get('/', function (req, res) {
  res.send(`Hello World`);
});

app.use(bodyParser.json()); // middleware to support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // middleware to support encoded bodies

const server = createHTTPServer(app);
server.listen(3000);
