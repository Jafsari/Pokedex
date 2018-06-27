import axios from 'axios';
import { SET_POKEMON } from './types.js'

export function search(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
      return dispatch(setPokemon(information))
     }).catch(e => {
      console.log(e)
     })
    }
  }


  export function setPokemon(information){
    return{
      type:SET_POKEMON,
      information
    }
  }
