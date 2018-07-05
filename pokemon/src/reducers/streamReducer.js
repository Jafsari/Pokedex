import { SET_STREAM } from '../actions/types'

const DEFAULT_STATE = {
    stream:false
  };

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_STREAM:
    return {
        stream:action.information
      };
		default:
		return state;
	}
}