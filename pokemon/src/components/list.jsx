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
    componentDidMount() {
        axios.get('http://localhost:9000/api/pokemon').then((response) => {
            this.setState({data:response})
        }).catch((error) => {
          console.log(error)
        })
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