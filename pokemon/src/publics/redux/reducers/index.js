import { combineReducers } from 'redux'

import pokemons from './pokemons'
import pokemon from './pokemon'
import users from './users'

const appReducer = combineReducers({
  pokemons,
  pokemon,
  users
})

export default appReducer;