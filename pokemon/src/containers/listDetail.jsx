import React, { Component } from 'react';
import Progress from '../components/progress.jsx';
import Card from './card.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/listDetail.css';
import berryImage from '../pics/pokemon-berry.png'



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
                cardMedia = {this.props.pokemon.sprites.front_default}
                />
          </span>
        }
       if (this.props.berry){
           var berrysubHeader = 'Natural Power' + ' ' + this.props.berry.natural_gift_power
           var cardDescription1 = "Natural Type" + " " + this.props.berry.natural_gift_type.name.charAt(0).toUpperCase() + this.props.berry.natural_gift_type.name.slice(1)
           var cardDescription2 = "Max Harvest" + " " + this.props.berry.max_harvest
           var cardDescription3 = "Smoothness" + " " + this.props.berry.smoothness
           info = 
           <span className='center'>
           <Card 
           title={this.props.berry.name.charAt(0).toUpperCase() + this.props.berry.name.slice(1)}
           cardMedia = {berryImage}
           Character = {this.props.berry.name[0].toUpperCase()}
           subHeader = {berrysubHeader}
           cardContent = {this.props.berry.firmness.name.charAt(0).toUpperCase() + this.props.berry.firmness.name.slice(1)}
           cardDescription1 = {cardDescription1}
           cardDescription2 = {cardDescription2}
           cardDescription3 = {cardDescription3}
           />
     </span>
       }
       console.log(this.props.berry)
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
      berry: state.berries.berries
      };
  };
  
  export default connect(mapStateToProps,actions)(ListDetail);
