import React, { Component } from 'react';
import ListDetail from './listDetail.jsx';
import axios from 'axios'

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:""
        }
    }
      render(){
         console.log(this.state.data)
  return (
    <div className='content' >
            <ListDetail
            info = {this.state.data}
             />
    </div>
  );
}
};

export default List;