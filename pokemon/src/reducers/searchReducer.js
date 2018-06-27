import { SET_POKEMON } from '../actions/types'

const DEFAULT_STATE = {
    pokemon:''
  };

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_POKEMON:
    return {
        pokemon:action.information
      };
		default:
		return state;
	}
}