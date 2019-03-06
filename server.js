const express = require('express');
const Routes = require('./api/Routes');

const server = express();

server.use(express.json());
server.use('/api', Routes);

module.exports = server;