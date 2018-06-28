import { SET_POKEMON, SET_POKEMON_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    pokemon:false,
    data:false
  };

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_POKEMON:
    return {
        pokemon:action.information
      };
      case SET_POKEMON_LOADING:
      return{
          data:action.information
      }
		default:
		return state;
	}
}