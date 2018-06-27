import React from 'react';
import '../styles/header.css';
import { Jumbotron, Button } from 'reactstrap';
import Search from './search.jsx';
import { Icon } from 'react-icons-kit';
import {coffee} from 'react-icons-kit/ionicons/coffee';
import Card from './card.jsx';
import Input from './input.jsx'
import Label from './formLabel.jsx'

const Header = (props) => {
  return (
    <div >
      < Jumbotron id="jumbotron">
        <p className="lead"><span className='coffee'>
        <Icon icon={coffee} />
        </span><span className="headerTitle">Pokedex.net</span></p>
        <hr className="my-2" />
      </Jumbotron>
      <div className='label'>
          <Label />
     </div>
    </div>
  );
};

export default Header;