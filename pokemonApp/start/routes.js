'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{

Route.get('pokemons', 'PokemonController.index')
Route.get('pokemon/:id', 'PokemonController.show')
Route.post('addPokemon', 'PokemonController.addPokemon')
Route.get('delete/:id', 'PokemonController.delete')

Route.get('types', 'TypeController.index')
Route.get('categories', 'CategoryController.index')

Route.post('register', 'UserController.register').middleware(['guest'])
Route.post('login', 'UserController.login').middleware(['guest'])

}).prefix('api/v1')