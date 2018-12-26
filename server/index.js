const express = require('express');
const massive = require('massive');
require('dotenv').config();

const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express();

app.use(express.json());


massive(CONNECTION_STRING).then(connection => {
  console.log('database connected')
  app.set('db', connection)
  app.listen(SERVER_PORT, console.log(`Listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))

