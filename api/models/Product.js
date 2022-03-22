/**
 * Crud.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 let Validator = require('validatorjs');
module.exports = {

  attributes: {
    product: {
      type: 'string',
    },
    price: {
      type: 'number',
      required: true,
   
    },
    image: {
      type: 'string'
    },
  },
 






};

