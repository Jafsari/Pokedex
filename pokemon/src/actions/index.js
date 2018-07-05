import axios from 'axios';
import { 
    SET_POKEMON, SET_POKEMON_LOADING, SET_POKEMON_FAIL, // Pokemon
    SET_ABILITY, SET_ABILITY_FAIL, SET_ABILITIES_LOADING, // Ability
    SET_BERRIES_FAIL, SET_BERRIES, SET_BERRIES_LOADING, //Berries
    SET_MOVES_FAIL, SET_MOVES, SET_MOVES_LOADING, // Moves
    SET_EVOLUTIONS_FAIL, SET_EVOLUTIONS, SET_EVOLUTIONS_LOADING, //Evolution
    SET_NATURES_FAIL, SET_NATURES, SET_NATURES_LOADING, // Encounters
    SET_ITEMS_FAIL, SET_ITEMS, SET_ITEMS_LOADING, // Items
    SET_GAMES_FAIL, SET_GAMES, SET_GAMES_LOADING, // Games
    SET_LOCATIONS_FAIL, SET_LOCATIONS, SET_LOCATIONS_LOADING, // Locations
    SET_STREAM //Streams
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


const reset = () => {
    return dispatch => {
    dispatch(setPokemon(false))

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
export function abilityLOADING(information){
    return{
        type:SET_ABILITIES_LOADING,
        information
    }
}


/*     BERRIES      */

export function berries(data){
    let BASE_URL = 'http://localhost:9000/api/pokemon/berries'
    return dispatch => {
    dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
      dispatch(setBerries(information))
      dispatch(setPokemonLoading('Finished'))
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
  export function berriesLOADING(information){
      return{
          type:SET_BERRIES_LOADING,
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
     dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setMoves(information))
        dispatch(setPokemonLoading('Finished'))
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

  export function movesLOADING(information){
    return{
        type:SET_MOVES_LOADING,
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

export function evolutions(data){
    reset()
    let BASE_URL = 'http://localhost:9000/api/pokemon/evolution'
    return dispatch => {
    dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setEvolution(information))
        dispatch(setPokemonLoading('Finished'))
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

export function evolutionLOADING(information){
    return{
        type:SET_EVOLUTIONS_LOADING,
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
    reset()
    let BASE_URL = 'http://localhost:9000/api/pokemon/natures'
    return dispatch => {
    dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setNatures(information))
        dispatch(setPokemonLoading('Finished'))
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

export function naturesLOADING(information){
    return{
        type:SET_NATURES_LOADING,
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
    dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setItems(information))
        dispatch(setPokemonLoading('Finished'))
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

export function itemsLOADING(information){
    return{
        type:SET_ITEMS_LOADING,
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
     dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setGames(information))
        dispatch(setPokemonLoading('Finished'))
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

export function gamesLOADING(information){
    return{
        type:SET_GAMES_LOADING,
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

    dispatch(setPokemonLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
        dispatch(setLocations(information))
        dispatch(setPokemonLoading('Finished'))
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

export function locationLOADING(information){
    return{
        type:SET_LOCATIONS_LOADING,
        information
    }
}

export function setlocationsFail(information){
return{
    type:SET_LOCATIONS_FAIL,
    information
}
}


/* STREAM */

export function setStream(information){
    return{
        type:SET_STREAM,
        information
    }
}




/* Helper */ 

export const APIRequest = (info,foo) => {
    if (info === 'Search Pokemon'){
        this.props.search({Pokemon:foo.toLowerCase()}).then((response) => {
            this.setState({Search:""})
        }).then(() => {
            this.props.ability({Effect:this.props.pokemon.abilities[0].ability.name})
        })
        .catch((error => {
            this.setState({Search:""})
        }))
      }
      if (info ==='Search Berries'){
        this.props.berries({Berries:foo.toLowerCase()}).then((response) => {
          this.setState({Search:""})
        }).catch(( error => {
          this.setState({Search:""})
        }))
      }
      if (info ==='Search Moves'){
        this.props.moves({Moves:foo.toLowerCase()}).then((response) => {
          this.setState({Search:""})
        }).catch( error => {
          this.setState({Search:""})
        })
      }
      if (info ==='Search Items'){
        this.props.items({Item:foo.toLowerCase()}).then((response) => {
          this.setState({Search:""})
        }).catch( error => {
          this.setState({Search:""})
        })
      }
      if (info ==='Search Locations'){
        this.props.locations({Location:foo.toLowerCase()}).then((response) => {
          this.setState({Search:""})
        }).catch( error => {
          this.setState({Search:""})
        })
      }
      if (info ==='Search Games'){
        this.props.games({Game:foo.toLowerCase()}).then((response) => {
          this.setState({Search:""})
        }).catch( error => {
          this.setState({Search:""})
        })
      }
      if (info ==='Search Natures'){
        this.props.natures({Nature:foo.toLowerCase()}).then((response) => {
          this.setState({Search:""})
        }).catch( error => {
          this.setState({Search:""})
        })
      }
      }
    