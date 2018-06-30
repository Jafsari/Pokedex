import { SET_ITEMS, SET_ITEMS_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    ITEMS:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_ITEMS:
    return{
    ITEMS:action.information
    }
    case SET_ITEMS_FAIL:
    return{
    ITEMS:action.information
    }
          default:
          return state;
      }
  }