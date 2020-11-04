const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router');

const { json } = require('express');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/', (req, res) => {
//     res.send('server running')
// })

server.use('/api/cars', carsRouter)

module.exports = server;