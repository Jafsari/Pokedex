import React, { Component } from 'react';
import '../App.css';
import Nav from './navbar.jsx';
import Header from './Header.jsx';
import List from './list.jsx';


class Landing extends Component {
  render() {
    return (
      <div className='wallpaper'>
      <nav> 
       <Nav />
      </nav>
    <header>
      <Header placeholder ='Search Pokemon' />
    </header>
    <main>
      <List />
    </main>
      </div>
    );
  }
}

export default Landing;