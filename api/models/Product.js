/**
 * Crud.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const validator = require("validator");
module.exports = {

  attributes: {
    product: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true,
      min: 5,
      max: 1000
    },
    image: {
      type: 'string'
    },
  },
};

