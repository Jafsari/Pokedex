import axios from 'axios';
import { SET_POKEMON, SET_POKEMON_LOADING } from './types.js'

export function search(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon'
    return dispatch => {
     dispatch(setPokemonLoading('loading'))
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

  export function setPokemonLoading(information){
      return{
          type:SET_POKEMON_LOADING,
          information
      }
  }
