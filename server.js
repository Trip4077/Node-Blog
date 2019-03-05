const express = require('express');
const userRoutes = require('./api/userRoutes');

const server = express();

server.use(express.json());
server.use('/api/users', userRoutes);

module.exports = server;