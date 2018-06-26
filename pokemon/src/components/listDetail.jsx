import React, { Component } from 'react';


class ListDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: false,
            information: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps !== undefined && nextProps.info.data) {  
            (this.setState({
                data:true,
                information:nextProps.info.data
            }));
        } 
    }
    picture = () => {
        {this.state.information.map((pokemon,index) => {
            return <img src={pokemon.species.url} alt = '' />
        })}
    }
    render() {
        console.log(this.state.information)
        let info;
        if (!this.state.data){
            info = <div> </div>
        }
        if (this.state.data){
           info = 
           <div>
           
          </div>
        }
return (
    <li >

    </li>
  );
}
}


export default ListDetail;