import React, { Component } from 'react';


const List = ({info}) =>{
return (
    <div >
        <ul>
            {info.moves.name}
        </ul>
    </div>
  );
}


export default List;