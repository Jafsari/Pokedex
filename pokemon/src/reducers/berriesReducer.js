import { SET_BERRIES, SET_BERRIES_FAIL,SET_BERRIES_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    berries:false,
    data:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_BERRIES:
    return{
    berries:action.information
    }
    case SET_BERRIES_FAIL:
    return{
    berries:action.information
    }
    case SET_BERRIES_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }