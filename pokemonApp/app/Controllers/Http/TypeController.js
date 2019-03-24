'use strict'

const Type = use('App/Models/Type')

class TypeController {

    async index ({request}) {
        const { limit } = request.get()
      return await Type.query().select('*').limit(limit).fetch()
  }

}

module.exports = TypeController
