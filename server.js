const express = require('express');
const Routes = require('./api/Routes');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


const server = express();

server.use(express.json());
server.use(helmet(), cors(),morgan('dev'))
server.use('/api', Routes);

module.exports = server;