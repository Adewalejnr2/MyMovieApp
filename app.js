const mongoose = require('mongoose');
const genres = require('./route/genres');
const customers = require('./route/customers');
const movies = require('./route/movies');
const rentals = require('./route/rentals');
const users = require('./route/users');
const auth = require('./route/auth');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const config = require('config');

mongoose
  .connect('mongodb://127.0.0.1:27017/movie')
  .then(() => console.log('Connected to Mongodb...'))
  .catch((err) => console.error('Could not connect to Mongodb...'));
  
if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

app.use(express.json());
app.use('/api/genre', genres);
app.use('/api/customer', customers);
app.use('/api/movie', movies);
app.use('/api/rental', rentals);
app.use('/api/user', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
