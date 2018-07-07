import React, { Component } from 'react';
import axios from 'axios';
import electric from '../pics/pikachu-electric.gif';
import dragon from '../pics/dragon.gif';
import fighting from '../pics/fighting.gif';
import flying from '../pics/fighting.gif';
import ground from '../pics/ground.gif';
import ice from '../pics/ice.gif';
import psychic from '../pics/psychic.gif';
import water from '../pics/water-attack.gif';
import dark from '../pics/dark.gif';
import fairy from '../pics/fairy.gif';
import grass from '../pics/grass.jpeg';
import ghost from '../pics/ghost.gif';
import normal from '../pics/normal.gif';
import rock from '../pics/rock.gif';
import bug from '../pics/bug.gif';
import steel from '../pics/steel.gif';
import charizard from '../pics/charizard-x.gif'


export const check = () => {
    if (count === 2) {
        return;
    }
    let count = 0;
    setInterval(function(){
        count++
    },1000)
    check()
}


// export const APIRequest = (info,foo) => {
// if (info === 'Search Pokemon'){
//     this.props.search({Pokemon:foo.toLowerCase()}).then((response) => {
//         this.setState({Search:""})
//     }).then(() => {
//         this.props.ability({Effect:this.props.pokemon.abilities[0].ability.name})
//     })
//     .catch((error => {
//         this.setState({Search:""})
//     }))
//   }
//   if (info ==='Search Berries'){
//     this.props.berries({Berries:foo.toLowerCase()}).then((response) => {
//       this.setState({Search:""})
//     }).catch(( error => {
//       this.setState({Search:""})
//     }))
//   }
//   if (info ==='Search Moves'){
//     this.props.moves({Moves:foo.toLowerCase()}).then((response) => {
//       this.setState({Search:""})
//     }).catch( error => {
//       this.setState({Search:""})
//     })
//   }
//   if (info ==='Search Items'){
//     this.props.items({Item:foo.toLowerCase()}).then((response) => {
//       this.setState({Search:""})
//     }).catch( error => {
//       this.setState({Search:""})
//     })
//   }
//   if (info ==='Search Locations'){
//     this.props.locations({Location:foo.toLowerCase()}).then((response) => {
//       this.setState({Search:""})
//     }).catch( error => {
//       this.setState({Search:""})
//     })
//   }
//   if (info ==='Search Games'){
//     this.props.games({Game:foo.toLowerCase()}).then((response) => {
//       this.setState({Search:""})
//     }).catch( error => {
//       this.setState({Search:""})
//     })
//   }
//   if (info ==='Search Natures'){
//     this.props.natures({Nature:foo.toLowerCase()}).then((response) => {
//       this.setState({Search:""})
//     }).catch( error => {
//       this.setState({Search:""})
//     })
//   }
//   }

//   export default connect(null,actions)(APIRequest)


export const media = () => {
    var cardMedia;
    if (this.props.move.type.name === 'electric'){
        cardMedia = electric;
    }
    if(this.props.move.type.name === 'water'){
        cardMedia = water;
    }
    if(this.props.move.type.name === 'psychic'){
        cardMedia = psychic;
    }
    if(this.props.move.type.name === 'dragon'){
        cardMedia = dragon;
    }
    if(this.props.move.type.name === 'ice'){
        cardMedia = ice;
    }
    if(this.props.move.type.name === 'ground'){
        cardMedia = ground;
    }
    if(this.props.move.type.name === 'flying'){
        cardMedia = flying;
    }
    if(this.props.move.type.name === 'dark'){
        cardMedia = dark;
    }
    if(this.props.move.type.name === 'grass'){
        cardMedia = grass;
    }
    if(this.props.move.type.name === 'normal'){
        cardMedia = normal;
    }
    if(this.props.move.type.name === 'rock'){
        cardMedia = rock;
    }
    if(this.props.move.type.name === 'fairy'){
        cardMedia = fairy;
    }
    if (this.props.move.type.name === 'bug'){
        cardMedia= bug;
    }
    if (this.props.move.type.name === 'steel'){
        cardMedia = steel;
    }
    if (this.props.move.type.name === 'fire'){
        cardMedia = charizard;
    }
    return cardMedia;
}
