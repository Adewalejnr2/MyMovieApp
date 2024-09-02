const mongoose = require('mongoose');
const genres = require('./route/genres');
const customers = require('./route/customers');
const movies = require('./route/movies');
const rentals = require('./route/rentals');
const express = require('express');
const app = express();

mongoose
  .connect('mongodb://127.0.0.1:27017/movie')
  .then(() => console.log('Connected to Mongodb...'))
  .catch((err) => console.error('Could not connect to Mongodb...'));

app.use(express.json());
app.use('/api/genre', genres);
app.use('/api/customer', customers);
app.use('/api/movie', movies);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
