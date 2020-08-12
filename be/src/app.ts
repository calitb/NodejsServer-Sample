import * as bodyParser from 'body-parser';

import connectToDatabase from './mysql';
import { createHTTPServer } from './server';
import express from 'express';

const app = express();

app.use(bodyParser.json()); // middleware to support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // middleware to support encoded bodies

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: 'success' }));
});
app.get('/query', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const sqlConnection = connectToDatabase();
  if (sqlConnection) {
    sqlConnection.query('SELECT id, name from user', (error, results, fields) => {
      sqlConnection.end();
      if (error) {
        res.status(503).send(JSON.stringify({ status: 'error', msg: "Couldn't get results from the DB, " + error }));
      } else {
        res.send(JSON.stringify({ status: 'success', data: results }));
      }
    });
  } else res.status(503).send(JSON.stringify({ status: 'error', msg: 'Fail to connect to the DB' }));
});

const server = createHTTPServer(app);
server.listen(3000);
