import React, { Component } from 'react';
import Progress from './progress.jsx';
import Card from './card.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/listDetail.css'


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
        if (this.props.pokemon){
           info = 
           <span className='center'>
                <Card />
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
      data: state.search.data
      };
  };
  
  export default connect(mapStateToProps,actions)(ListDetail);



/*        if (this.state.data){
        console.log(this.state.information[0].moves)
        }
        var info;
        if (!this.state.data){
            info = <div> </div>
        }
        if (this.state.data){
           info = 
           <div>
                {this.state.information[0].moves.map((pokemon,index) => {
            return (
                <div>
                <div key={index}>
                   {pokemon.move.name}
                </div>
                <div>
                    <img src ={pokemon.move.url} alt ='' />
                </div>
              </div>
            )
        })}
          </div>
        }*/