import { SET_EVOLUTIONS, SET_EVOLUTIONS_FAIL,SET_EVOLUTIONS_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    evolutions:false,
    data:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_EVOLUTIONS:
    return{
    evolutions:action.information
    }
    case SET_EVOLUTIONS_FAIL:
    return{
    evolutions:action.information
    }
    case SET_EVOLUTIONS_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }