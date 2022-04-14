/**
 * Buy.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    
    firstname:{
      type:"string",
      required:true
    },
    email:{
      type:"string",
      required:true},
    address:{
      type:"string",
      required:true},
    city:{ 
      type:"string",
      required:true},
    state:{
      type:"string",
      required:true},
    zip:{
      type:"number",
      required:true
    },
    cardname:{
      type:"string",
      required:true
    },
    cardnumber:{
      type:"number",
      required:true
    },expmonth:{
      type:"number",
      required:true
    },
    expyear:{
      type:"number",
      required:true},
    cvv:{
      type:"number",
      required:true
    },
    buyid:{
      type:"string",
      required:true
    }
  },

};

