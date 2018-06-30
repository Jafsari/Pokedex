import axios from 'axios';
import { 
    SET_POKEMON, SET_POKEMON_LOADING, SET_POKEMON_FAIL, // Pokemon
    SET_ABILITY, SET_ABILITY_FAIL, // Ability
    SET_BERRIES_FAIL, SET_BERRIES, BERRIES_CONNECT, //Berries
    SET_MOVES_FAIL, SET_MOVES, MOVES_CONNECT, // Moves
    SET_EVOLUTIONS_FAIL, SET_EVOLUTIONS, EVOLUTIONS_CONNECT, //Evolution
    SET_NATURES_FAIL, SET_NATURES, NATURES_CONNECT, // Encounters
    SET_ITEMS_FAIL, SET_ITEMS, ITEMS_CONNECT, // Items
    SET_GAMES_FAIL, SET_GAMES, GAMES_CONNECT, // Games
    SET_LOCATIONS_FAIL, SET_LOCATIONS, LOCATIONS_CONNECT // Locations
 } from './types.js'




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


/* MOVES */

export function moves(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/moves'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setMoves(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setmovesFail('Done'))
     })
    }
  }

  export function setMoves(information){
    return{
        type:SET_MOVES,
        information
    }
}

  export function movesConnect(information){
    return{
        type:MOVES_CONNECT,
        information
    }
}

export function setmovesFail(information){
return{
    type:SET_MOVES_FAIL,
    information
}
}

/* EVOLUTION */

export function evolution(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/evolution'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setEvolution(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setevolutionFail('Done'))
     })
    }
  }

  export function setEvolution(information){
    return{
        type:SET_EVOLUTIONS,
        information
    }
}

export function evolutionConnect(information){
    return{
        type:EVOLUTIONS_CONNECT,
        information
    }
}

export function setevolutionFail(information){
return{
    type:SET_EVOLUTIONS_FAIL,
    information
}
}

/* NATURES */

export function natures(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/natures'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setNatures(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setnaturesFail('Done'))
     })
    }
  }

  export function setNatures(information){
    return{
        type:SET_NATURES,
        information
    }
}

export function naturesConnect(information){
    return{
        type:NATURES_CONNECT,
        information
    }
}

export function setnaturesFail(information){
return{
    type:SET_NATURES_FAIL,
    information
}
}

/* ITEMS */

export function items(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/items'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setItems(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setitemsFail('Done'))
     })
    }
  }

  export function setItems(information){
    return{
        type:SET_ITEMS,
        information
    }
}

export function itemsConnect(information){
    return{
        type:ITEMS_CONNECT,
        information
    }
}

export function setitemsFail(information){
return{
    type:SET_ITEMS_FAIL,
    information
}
}

/* GAMES */

export function games(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/games'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setGames(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setgamesFail('Done'))
     })
    }
  }

  export function setGames(information){
    return{
        type:SET_GAMES,
        information
    }
}

export function gamesConnect(information){
    return{
        type:GAMES_CONNECT,
        information
    }
}

export function setgamesFail(information){
return{
    type:SET_GAMES_FAIL,
    information
}
}


/* LOCATION */

export function locations(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/locations'
    return dispatch => {
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setLocations(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setlocationsFail('Done'))
     })
    }
  }

  export function setLocations(information){
    return{
        type:SET_LOCATIONS,
        information
    }
}

export function locationConnect(information){
    return{
        type:LOCATIONS_CONNECT,
        information
    }
}

export function setlocationsFail(information){
return{
    type:SET_LOCATIONS_FAIL,
    information
}
}