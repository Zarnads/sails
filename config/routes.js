/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const CrudController = require("../api/controllers/CrudController");

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'CrudController.addpage',

  '/home': { view: 'pages/home' },
  '/show': { view: 'pages/showProduct' },
  "POST /Crud/create": 'CrudController.create',
  "GET /Crud/get": 'CrudController.get',
  "GET /Crud/updateOne/:id": 'CrudController.updateOne',
  "POST /Crud/updateOne/:id": 'CrudController.update',
  "GET /:id": 'CrudController.delete',
  "POST /upload":"CrudController.upload",
  "GET /openimg/:filename":"CrudController.openimg",
  "GET /description/:id": "CrudController.description",

  '/cart/:id': "CartController.cart",
  "GET /delete/:id":"CartController.delete",
  "GET /deleted":"CartController.getcart",
  "GET /deleteall":"CartController.deleteall",

  "/signin":{view:"pages/SignIn"},
  "/signup":{view:"pages/SignUp"},
  "POST /SIGNIN":"UserController.signin",
  "POST /SIGNUP":"UserController.signup",

  "/buy/:id":"CartController.buy"
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
