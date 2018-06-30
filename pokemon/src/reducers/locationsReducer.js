import { SET_LOCATIONS, SET_LOCATIONS_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    LOCATIONS:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_LOCATIONS:
    return{
    LOCATIONS:action.information
    }
    case SET_LOCATIONS_FAIL:
    return{
    LOCATIONS:action.information
    }
          default:
          return state;
      }
  }