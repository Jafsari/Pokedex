import { SET_ENCOUNTERS, SET_ENCOUNTERS_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    ENCOUNTERS:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_ENCOUNTERS:
    return{
    ENCOUNTERS:action.information
    }
    case SET_ENCOUNTERS_FAIL:
    return{
    ENCOUNTERS:action.information
    }
          default:
          return state;
      }
  }