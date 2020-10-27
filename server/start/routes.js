"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { name: "Simple Todo Api", version: "1.0.0" };
});

Route.group(() => {
  Route.post("login", "AuthController.login");
  Route.post("register", "AuthController.register");
}).prefix("auth");

Route.resource('todos', 'TodoController').middleware('auth')
