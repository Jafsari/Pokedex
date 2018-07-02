import { SET_ITEMS, SET_ITEMS_FAIL, SET_ITEMS_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    items:false,
    data:false
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
    case SET_ITEMS_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }