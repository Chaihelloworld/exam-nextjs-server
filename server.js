const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const logger = require('morgan');

// let users = require('./user.json');
let server = express();
// server.use(bodyParser.json());  // ให้ server(express) ใช้งานการ parse json
// // server.use(morgan('dev')); // ให้ server(express) ใช้งานการ morgam module
// server.use(cors()); // ให้ server(express) ใช้งานการ cors module

// server.get('/user', function (req, res, next) {
//   return res.status(200).json({
//     code: 1,
//     message: 'OK',
//     data: users
//   })
// });

// server.get('/user', function (req, res, next) {
//   return res.status(200).json({
//     code: 1,
//     message: 'OK',
//     data: users
//   })
// });

// server.get('/user/get', function (req, res, next)  {
//   return res.status(200).json({
//     code: 1,
//     message: 'OK',
//     data: users
//   })
// }),


/////new CMV/////
const users = require('./routes/users');

server.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');

  next();
});
//Middlewares
server.use(cors());
server.use(logger('dev'));
server.use(bodyParser.json());

//Routes
server.use('/user', users);

server.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/////new CMV/////
const port = server.get('port') || 5000;

server.listen(5000, function () {
  console.log(`Server is running on port: ${port}`);
  // console.log('Server Listen at http://localhost:5000');
  console.log('Users :', users)
  // console.log(users)

});