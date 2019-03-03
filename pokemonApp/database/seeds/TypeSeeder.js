'use strict'

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Type = use('App/Models/Type')

class TypeSeeder {
  async run () {
    const u1 = new Type()
    u1.name = 'Water'
    await u1.save()

    const u2 = new Type()
    u2.name = 'Fire'
    await u2.save()

    const u3 = new Type()
    u3.name = 'Grass'
    await u3.save()

    const u4 = new Type()
    u4.name = 'Ground'
    await u4.save()
  }
}

module.exports = TypeSeeder
