const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: string,
    required: true,
    minlength: 5,
    maxlength: 2255,
    unique: true,
  },
  name: {
    type: string,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.email.string().min(5).max(2255).required(),
    password: Joi.string().min(5).max(1024).required(),
  };
  return Joi.validate(user, schema);
}
