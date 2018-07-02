import { SET_MOVES, SET_MOVES_FAIL, SET_MOVES_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    moves:false,
    data:false
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
    case SET_MOVES_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }