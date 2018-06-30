import { SET_GAMES, SET_GAMES_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    GAMES:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_GAMES:
    return{
    GAMES:action.information
    }
    case SET_GAMES_FAIL:
    return{
    GAMES:action.information
    }
          default:
          return state;
      }
  }