import { SET_ITEMS, SET_ITEMS_FAIL } from '../actions/types'

const DEFAULT_STATE = {
    items:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_ITEMS:
    return{
    items:action.information
    }
    case SET_ITEMS_FAIL:
    return{
    items:action.information
    }
          default:
          return state;
      }
  }