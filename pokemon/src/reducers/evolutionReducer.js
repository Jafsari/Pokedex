import { SET_EVOLUTIONS, SET_EVOLUTIONS_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    EVOLUTIONS:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_EVOLUTIONS:
    return{
    EVOLUTIONS:action.information
    }
    case SET_EVOLUTIONS_FAIL:
    return{
    EVOLUTIONS:action.information
    }
          default:
          return state;
      }
  }