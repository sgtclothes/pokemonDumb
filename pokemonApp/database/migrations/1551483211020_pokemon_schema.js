'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonSchema extends Schema {
  up () {
    this.create('pokemons', (table) => {
      table.increments()
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('NO ACTION')
      .onDelete('SET NULL')
      table.string('name')
      table.string('image')
      table.string('type')
      table.string('category')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemons')
  }
}

module.exports = PokemonSchema
