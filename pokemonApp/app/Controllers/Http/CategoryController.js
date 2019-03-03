'use strict'

const Category = use('App/Models/Category')

class CategoryController {
    async index ({request}) {
        const { limit } = request.get()
      return await Category.query().select('*').limit(limit).fetch()
  }

}

module.exports = CategoryController
