import axios from 'axios'
import {url} from '../../../../components/Server'

export const getPokemons = () => {
    return {
        type: 'GET_POKEMONS',
        payload: axios.get(url+'pokemons')      
    }
}