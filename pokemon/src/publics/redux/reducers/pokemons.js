const initialState = {
    data: [],
    isLoading: false,
    isLoggedIn: false,
    isError: false
  }
  
  export default pokemons = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMONS_PENDING' :
        return {
            ...state,
            isLoading:true
        }
        case 'GET_POKEMONS_REJECTED' :
        return {
            ...state,
            isLoading:false
        }
        case 'GET_POKEMONS_FULFILLED' :
        return {
            ...state,
            isLoading:false,
            data: action.payload.data
        }
        default:
            return state
    }
  }