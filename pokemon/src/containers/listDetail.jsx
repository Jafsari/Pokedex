import React, { Component } from 'react';
import Progress from '../components/progress.jsx';
import Card from './card.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/listDetail.css';



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
      data: state.search.data,
      effect: state.power.ability
      };
  };
  
  export default connect(mapStateToProps,actions)(ListDetail);
