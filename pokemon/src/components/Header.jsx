import React from 'react';
import '../styles/header.css';
import { Jumbotron, Button } from 'reactstrap';
import Search from './search.jsx';
import { Icon } from 'react-icons-kit';
import {coffee} from 'react-icons-kit/ionicons/coffee';
import Card from './card.jsx'

const Header = (props) => {
  return (
    <div >
      < Jumbotron id="jumbotron">
        <p className="lead"><span className='coffee'>
        <Icon icon={coffee} />
        </span><span className="headerTitle">Pokedex.net </span></p>
        <hr className="my-2" />
      </Jumbotron>
      <div>
          <Search />
     </div>
    </div>
  );
};

export default Header;