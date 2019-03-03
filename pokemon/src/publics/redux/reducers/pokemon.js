const initialState = {
    data: [],
    isLoading: false,
    isLoggedIn: false,
    isError: false
  }
  
  export default pokemon = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMON_PENDING' :
        return {
            ...state,
            isLoading:true
        }
        case 'GET_POKEMON_REJECTED' :
        return {
            ...state,
            isLoading:false
        }
        case 'GET_POKEMON_FULFILLED' :
        return {
            ...state,
            isLoading:false,
            data: action.payload.data
        }

        case 'DELETE_POKEMON_PENDING' :
        return {
            ...state,
            isLoading:true
        }
        case 'DELETE_POKEMON_REJECTED' :
        return {
            ...state,
            isLoading:false
        }
        case 'DELETE_POKEMON_FULFILLED' :
        return {
            ...state,
            isLoading:false,
        }
        default:
            return state
    }
  }