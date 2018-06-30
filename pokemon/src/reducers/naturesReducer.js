import { SET_NATURES, SET_NATURES_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    NATURES:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_NATURES:
    return{
    NATURES:action.information
    }
    case SET_NATURES_FAIL:
    return{
    NATURES:action.information
    }
          default:
          return state;
      }
  }