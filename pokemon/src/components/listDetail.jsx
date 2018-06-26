import React, { Component } from 'react';


class ListDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: false,
            information: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.info.data) {  
            (this.setState({
                data:true,
                information:[nextProps.info.data]
            }));
        } 
    }
    render() {
        console.log(this.state.data)
        let info;
        if (!this.state.data){
            info = <div> </div>
        }
        if (this.state.data){
           info = 
           <div>
                {this.state.information.map((pokemon,index) => {
            return (
                <div>
                <div key={index}>
                   {pokemon.species.name}
                </div>
                <div>
                    {pokemon.order}
                </div>
                </div>
            )
        })}
          </div>
        }
return (
    <div >
    {info}
    </div>
  );
}
}


export default ListDetail;