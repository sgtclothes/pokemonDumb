'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    pokemon() {
        return this.belongsTo('App/Models/Pokemon')
    }
}

module.exports = Category
