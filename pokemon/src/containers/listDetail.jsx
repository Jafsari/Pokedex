import React, { Component } from 'react';
import Progress from '../components/progress.jsx';
import Card from './card.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/listDetail.css';
import berryImage from '../pics/pokemon-berry.png';
import nature from '../pics/nature.gif';
import map from '../pics/region.png';
import charizard from '../pics/charizard-x.gif'
import berry from '../pics/pikach-fruit.gif';
import PokeSprite from 'react-poke-sprites';
import sprite from '../components/sprite.jsx';
import axios from 'axios';


class ListDetail extends Component{
    constructor(props){
        super(props)
    }
    render() {
       var info;
        if (this.props.data=== 'loading'){
            info = <div className="center">
             <Progress /> 
             </div>
        }
        if (this.props.pokemon && this.props.effect){
            const pokemon = this.props.pokemon.name
            const picture = this.props.pokemon.sprites.front_default
            const media = `http://www.pokestadium.com/sprites/xy/${pokemon}.gif`
             var pokemon = this.props.pokemon.types.map((poke,index) => {
                return (
                  {poke}.poke.type.name.charAt(0).toUpperCase() + {poke}.poke.type.name.slice(1)
                )
            })
            var stats = this.props.pokemon.stats.map((stat,index) => {
                return (
                   {stat}.stat.stat.name,{stat}.stat.base_stat
                )
            })
            var answer = stats.map((info,index) => {
                return (
                    {info}
                )
            })
            var check =  (this.props.effect.effect_entries[0] ? (
                <div> </div>
            ): (
                <div>{this.props.effect.effect_entries[0].effect} </div>
            ));
           info = 
           
           <span className='center'>
                <Card
                subHeader = {pokemon}
                cardContent = {this.props.effect.name.charAt(0).toUpperCase() + this.props.effect.name.slice(1)}
                Character = {this.props.pokemon.name[0].toUpperCase()}
                title = {this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}
                cardDescription1 = {this.props.effect.effect_entries[0].effect}
                cardDescription2 = {this.props.effect.effect_entries[0].short_effect}
                cardMedia = {media}
                />
          </span>
        }
       if (this.props.berry && this.props.data !== 'loading'){
           var berrysubHeader = 'Natural Power' + ' ' + this.props.berry.natural_gift_power
           var cardDescription1 = "Natural Type" + " " + this.props.berry.natural_gift_type.name.charAt(0).toUpperCase() + this.props.berry.natural_gift_type.name.slice(1)
           var cardDescription2 = "Max Harvest" + " " + this.props.berry.max_harvest
           var cardDescription3 = "Smoothness" + " " + this.props.berry.smoothness
           info = 
           <span className='center'>
           <Card 
           title={this.props.berry.name.charAt(0).toUpperCase() + this.props.berry.name.slice(1)}
           cardMedia = {berry}
           Character = {this.props.berry.name[0].toUpperCase()}
           subHeader = {berrysubHeader}
           cardContent = {this.props.berry.firmness.name.charAt(0).toUpperCase() + this.props.berry.firmness.name.slice(1)}
           cardDescription1 = {cardDescription1}
           cardDescription2 = {cardDescription2}
           cardDescription3 = {cardDescription3}
           />
     </span>
       }
       if (this.props.item && this.props.data !== 'loading'){
        const title = this.props.item.name.charAt(0).toUpperCase() + this.props.item.name.slice(1)
        const character = this.props.item.name[0].toUpperCase()
        const cardDescription1 = this.props.item.effect_entries[0].effect
        const cardDescription2 = this.props.item.effect_entries[0].short_effect
        const subHeader = this.props.item.attributes[1].name.charAt(0).toUpperCase() + this.props.item.attributes[1].name.slice(1)
        const cardMedia = this.props.item.sprites.default
        info = 
        <span className='center'>
        <Card 
        title={title}
        cardMedia={cardMedia}
        Character={character} 
        subHeader={subHeader}
        cardContent 
        cardDescription1={cardDescription1} 
        cardDescription2={cardDescription2}
        cardDescription3 
        />
  </span>
       }
       if (this.props.nature && this.props.data !== 'loading'){
           console.log(this.props.nature)
           const title = this.props.nature.name.charAt(0).toUpperCase() + this.props.nature.name.slice(1)
           const character = this.props.nature.name[0].toUpperCase()
           const subHeader = this.props.nature.names[0].name
           const cardDescription1 = 'Decreased_stat:'+ ' ' + this.props.nature.decreased_stat.name.charAt(0).toUpperCase() + this.props.nature.decreased_stat.name.slice(1)
           const cardDescription2 = 'Increased_Stat:'+ ' ' + this.props.nature.increased_stat.name.charAt(0).toUpperCase() + this.props.nature.increased_stat.name.slice(1)
           const cardDescription3 = 'Hates_Flavor:'+ ' ' + this.props.nature.hates_flavor.name.charAt(0).toUpperCase() + this.props.nature.hates_flavor.name.slice(1)
           const cardDescription4 = 'Likes_Flavor:'+ ' ' + this.props.nature.likes_flavor.name.charAt(0).toUpperCase() + this.props.nature.likes_flavor.name.slice(1)
        info = 
        <span className='center'>
        <Card 
        title={title}
        cardMedia={nature}
        Character={character}
        subHeader={subHeader}
        cardContent 
        cardDescription1={cardDescription1}
        cardDescription2={cardDescription2}
        cardDescription3={cardDescription3}
        cardDescription4={cardDescription4}
        />
  </span>
       }
       if (this.props.region && this.props.data !== 'loading'){
        const title = this.props.region.name.charAt(0).toUpperCase() + this.props.region.name.slice(1)
        const character = this.props.region.name[0].toUpperCase()
        const cardDescription1 = this.props.region.descriptions[2].description
        const cardDescription2 = this.props.region.version_groups.map((item,index) => {
           return (
           <div><strong> Game: </strong> {item.name}</div>
           )
        })
        const summary = this.props.region.pokemon_entries.map((item,index) => {
            return (
            <div><strong> {item.entry_number}</strong> {item.pokemon_species.name}</div>
            )
         })
     info = 
     <span className='center'>
     <Card 
     title={title}
     cardMedia={map}
     Character={character}
     subHeader
     cardContent 
     cardDescription1={cardDescription1}
     cardDescription2={cardDescription2}
     summary={summary}
     />
</span>
       }
    if (this.props.move && this.props.data !== 'loading'){
    const title = this.props.move.name.charAt(0).toUpperCase() + this.props.move.name.slice(1)
    const character = this.props.move.type.name[0].toUpperCase()
    const subHeader = this.props.move.type.name.charAt(0).toUpperCase() + this.props.move.type.name.slice(1)
    const cardDescription1 = this.props.move.effect_entries[0].effect
    const cardDescription2 = this.props.move.effect_entries[0].short_effect
    const summary = 'Accuracy:' + ' ' + this.props.move.accuracy
    const summary2 = 'Power:' + ' ' + this.props.move.power
    const summary3 = 'PP:' + ' ' + this.props.move.pp
     info = 
     <span className='center'>
     <Card 
     title={title}
     cardMedia={charizard}
     Character={character}
     subHeader={subHeader}
     cardContent 
     cardDescription1= {cardDescription1}
     cardDescription2= {cardDescription2}
     summary={summary}
     summary2={summary2}
     summary3={summary3}
     />
</span>
    }

return (
    <div >
        {info}
    </div>
  );
}
}


const mapStateToProps = (state) => { 
    return { 
      pokemon: state.search.pokemon,
      data: state.search.data,
      effect: state.power.ability,
      berry: state.berries.berries,
      item: state.item.items,
      nature: state.natures.natures,
      region: state.games.games,
      move: state.moves.moves
      };
  };
  
  export default connect(mapStateToProps,actions)(ListDetail);
