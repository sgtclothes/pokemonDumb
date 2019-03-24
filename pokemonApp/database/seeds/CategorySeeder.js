'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category')

class CategorySeeder {
  async run () {

    const u1 = new Category()
    u1.name = 'Fire Pokemon'
    await u1.save()

    const u2 = new Category()
    u2.name = 'Water Pokemon'
    await u2.save()

    const u3 = new Category()
    u3.name = 'Grass Pokemon'
    await u3.save()

  }
}

module.exports = CategorySeeder
