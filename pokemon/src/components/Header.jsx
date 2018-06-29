import React from 'react';
import '../styles/header.css';
import { Jumbotron, Button } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import {coffee} from 'react-icons-kit/ionicons/coffee';
import Input from './input.jsx'
import Label from '../containers/formLabel.jsx'

const Header = (props) => {
    console.log(props.placeholder)
  return (
    <div >
      < Jumbotron id="jumbotron">
        <p className="lead"><span className='coffee'>
        <Icon icon={coffee} />
        </span><span className="headerTitle">Pokedex</span></p>
        <hr className="my-2" />
      </Jumbotron>
      <div className='label'>
          <Label placeholder={props.placeholder} />
     </div>
    </div>
  );
};

export default Header;