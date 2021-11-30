const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const server = express();
const routes = require('./routes/index');
const passport = require('passport');
const {roleAuth, loginAuth} = require('./controllers/auth/roleAuth');

dotenv.config();

require('./controllers/auth/authentication');

server.name = 'API';

server.use(passport.initialize());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json());
server.use(cookieParser());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Jwt');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);
server.use(loginAuth);
server.use(roleAuth);
// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



module.exports = server;