import React, { Component } from 'react';
import Progress from './progress.jsx'

class ListDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: false,
            information:{}
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
 
return (
    <div >

    </div>
  );
}
}


export default ListDetail;



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