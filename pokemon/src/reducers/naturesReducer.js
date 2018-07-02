import { SET_NATURES, SET_NATURES_FAIL, SET_NATURES_LOADING } from '../actions/types'

const DEFAULT_STATE = {
    natures:false,
    data:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_NATURES:
    return{
    natures:action.information
    }
    case SET_NATURES_FAIL:
    return{
    natures:action.information
    }
    case SET_NATURES_LOADING:
    return{
        data:action.information
    }
          default:
          return state;
      }
  }