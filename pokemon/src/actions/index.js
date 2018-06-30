import axios from 'axios';
import { SET_POKEMON, SET_POKEMON_LOADING, SET_POKEMON_FAIL,SET_ABILITY, SET_ABILITY_FAIL, SET_BERRIES_FAIL, SET_BERRIES, BERRIES_CONNECT } from './types.js'




/*        HELPER       */

const reduxAPIRequest = (data,route,action1,action2) => {
    let BASE_URL = `http://localhost:9000/api/pokemon/${route}`
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(action1(information))
     }).catch(e => {
      console.log(e)
      return dispatch(action2('Done'))
     })
    }
}

/*       POKEMON       */
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


  /*        ABILITY       */

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

/*     BERRIES      */

export function berries(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/berries'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setBerries(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setBerriesFail('Done'))
     })
    }
  }

  export function setBerries(information){
    return{
        type:SET_BERRIES,
        information
    }
}
  export function berriesConnect(information){
      return{
          type:BERRIES_CONNECT,
          information
      }
  }

export function setBerriesFail(information){
  return{
      type:SET_BERRIES_FAIL,
      information
  }
}


/* EVOLUTIONS */
