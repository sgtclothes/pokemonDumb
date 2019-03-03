import axios from 'axios'
import {url} from '../../../../components/Server'

export const addPokemon = (data) => {
    return {
        type: 'ADD_POKEMON',
        payload: axios.post(url+'addNote',data)      
    }
}

export const getPokemon = (id) => {
    return {
        type: 'GET_POKEMON',
        payload: axios.get(url+'pokemon/'+id)      
    }
}

export const deletePokemon = (id) => {
    return {
        type: 'DELETE_POKEMON',
        payload: axios.get(url+'delete/'+id)      
    }
}

// export const updateNote = (id, data) => {
//     return {
//         type: 'UPDATE_NOTE',
//         payload: axios.post(url+'update/'+id,data)      
//     }
// }

// export const addReminder = (data) => {
//     return {
//         type: 'ADD_REMINDER',
//         payload: axios.post(url+'addReminder',data)      
//     }
// }