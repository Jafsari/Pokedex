import { SET_CARDS, SET_CARDS_FAIL,SET_CARDS_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    cards:false,
    data:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_CARDS:
    return{
    cards:action.information
    }
    case SET_CARDS_FAIL:
    return{
    cards:action.information
    }
    case SET_CARDS_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }