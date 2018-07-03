import { SET_LOCATIONS, SET_LOCATIONS_FAIL, SET_LOCATIONS_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    locations:false,
    data:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_LOCATIONS:
    return{
    locations:action.information
    }
    case SET_LOCATIONS_FAIL:
    return{
    locations:action.information
    }
    case SET_LOCATIONS_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }