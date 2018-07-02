import { SET_GAMES, SET_GAMES_FAIL, SET_GAMES_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    games:false,
    data:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_GAMES:
    return{
    games:action.information
    }
    case SET_GAMES_FAIL:
    return{
    games:action.information
    }
    case SET_GAMES_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }