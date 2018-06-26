import React, { Component } from 'react';


class List extends Component (){
    componentDidMount() {
        axios.get('http://localhost:9000/api/pokemon').then((response) => {
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
            info = {response}
             />
        </ul>
    </div>
  );
}
};

export default list;