const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load config
dotenv.config({
  path: './config/config.env'
});

connectDB();

const app = express();

// Logging
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev')); }

const PORT = process.env.PORT;

app.listen(PORT, console.log(
  `Environment: ${process.env.NODE_ENV}\nPort: ${PORT}`
));