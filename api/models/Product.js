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

  validation: function (req, res) {

    let rules = {
      product: "required",
      price: 'required|min:5|numeric',
    };
    let data2 = {
      product: req.body.product,
      price: req.body.price
    };

    let validate = new Validator(data2, rules);
    if (validate.passes()) {
      return { data2: "ok", err: null }
    }
    else { return { data2: null, err: validate.errors.all() } }






  },







};

