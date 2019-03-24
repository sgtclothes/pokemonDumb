'use strict'

const Pokemons = use('App/Models/Pokemon')
const Type = use('App/Models/Type')
const Category = use('App/Models/Category')
const Database = use('Database')

class PokemonController {

    async index ({response}) {
        const pokemon = await Database
        .table('pokemons')

        return response.json({pokemon})
    }

    async addPokemon({response, request}) {
        const pokemon_name = request.input("pokemon_name")
        const image = request.input("image")

        let pokemon = new Pokemons()
        pokemon.pokemon_name = pokemon_name
        pokemon.image = image

        await pokemon.save() 
		return response.json({'pokemon': pokemon})
    }

    async show ({params, response}) {
        try {
           const pokemon = await Pokemons.find(params.id)
           const type = await Type.query().select('id','name').where('id',pokemon.type_id).first()
           const category = await Category.query().select('id','name_category').where('id',pokemon.category_id).first()
  
           return response.json({'pokemon':pokemon, 'type':type,'category':category})
        } catch (error) {
            return response.send({message:'Item not found'})
        }   
    }

    async delete ({params, response}) {
        const pokemon = await Pokemons.find(params.id)
		if (!pokemon) {
			return response.status(404).json({data: 'Resource not found'})
		}
        await pokemon.delete()

		return response.status(204).json('Successfully deleted')
    }
    
    async update ({params, request, response}) {
		const pokemonFill = request.only(['pokemon_name', 'image'])

		const pokemon = await Pokemons.find(params.id)
		if (!pokemon) {
			return response.status(404).json({data: 'Resource not found'})
		}
		pokemon.pokemon_name = pokemonFill.pokemon_name
		pokemon.image = pokemonFill.image

		await pokemon.save()

		return response.status(200).json(pokemon)
    }

    async getCategories ({request}) {
		  const { limit } = request.get()
	    return await Pokemons.query().select('id','name').limit(limit).fetch()
    }
     
}

module.exports = PokemonController
