import axios from 'axios';
import { SET_POKEMON, SET_POKEMON_LOADING, SET_POKEMON_FAIL,SET_ABILITY, SET_ABILITY_FAIL } from './types.js'

export function search(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon'
    return dispatch => {
     dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
      return dispatch(setPokemon(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setPokemonFail('Done'))
     })
    }
  }

  export function ability(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/ability'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setAbility(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setAbilityFail('Done'))
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

  export function setPokemonFail(information){
      return{
          type:SET_POKEMON_FAIL,
          information
      }
  }


  /* ABILITY */

  export function setAbility(information){
      return{
          type:SET_ABILITY,
          information
      }
  }

  export function setAbilityFail(information){
    return{
        type:SET_ABILITY_FAIL,
        information
    }
}
