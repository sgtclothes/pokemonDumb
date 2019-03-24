'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokemon extends Model {
    user() {
        return this.belongsTo('App/Models/User')
        }
    category() {
        return this.hasOne('App/Models/Category')
        }
    type() {
        return this.hasMany('App/Models/Type')
        }
}

module.exports = Pokemon
