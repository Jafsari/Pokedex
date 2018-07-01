import React, { Component } from 'react';
import axios from 'axios';
import * as actions from '../actions';
import { connect } from 'react-redux';


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

  export default connect(null,actions)(APIRequest)

