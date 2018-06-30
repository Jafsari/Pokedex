import { SET_MOVES, SET_MOVES_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    moves:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_MOVES:
    return{
    moves:action.information
    }
    case SET_MOVES_FAIL:
    return{
    moves:action.information
    }
          default:
          return state;
      }
  }