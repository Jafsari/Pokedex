import { MOVES_LOCATIONS, MOVES_LOCATIONS_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    MOVES:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case MOVES_LOCATIONS:
    return{
    MOVES:action.information
    }
    case MOVES_LOCATIONS_FAIL:
    return{
    MOVES:action.information
    }
          default:
          return state;
      }
  }