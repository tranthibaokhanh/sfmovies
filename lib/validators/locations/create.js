'use strict';

const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().max(255).required(),
});
