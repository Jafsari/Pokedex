import { SET_ABILITY, SET_ABILITY_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    ability:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_ABILITY:
    return{
    ability:action.information
    }
    case SET_ABILITY_FAIL:
    return{
    ability:action.information
    }
          default:
          return state;
      }
  }