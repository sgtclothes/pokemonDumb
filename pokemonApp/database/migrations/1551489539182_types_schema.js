'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypesSchema extends Schema {
  up () {
    this.table('types', (table) => {
      // alter table
      table.string('name')
    })
  }

  down () {
    this.table('types', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TypesSchema
