'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriesSchema extends Schema {
  up () {
    this.table('categories', (table) => {
      // alter table
      table.string('name')
    })
  }

  down () {
    this.table('categories', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CategoriesSchema
