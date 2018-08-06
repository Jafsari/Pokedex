import { SET_USER } from '../actions/types'

const DEFAULT_STATE = {
    isAuthenticated:false
  };
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
    case SET_USER:
    return{
    isAuthenticated: !!(Object.keys(action.user).length)
    }
          default:
          return state;
      }
  }