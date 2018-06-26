import React, { Component } from 'react';


class List extends Component (){
    constructor(props){
        super(props)
        this.state = {
            data:""
        }
    }
    componentDidMount() {
        axios.get('http://localhost:9000/api/pokemon').then((response) => {
            this.setState({data:response})
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }
      render(){
  return (
    <div >
        <ul>
            <ListDetail
            info = {this.state.data}
             />
        </ul>
    </div>
  );
}
};

export default list;