import React, { Component } from 'react';
import Nav from './navbar.jsx';
import Header from './Header.jsx';
import List from './list.jsx';
import '../App.css';


class App extends Component {
  render() {
    return (
      <div className='wallpaper'>
      <nav> 
       <Nav />
      </nav>
    <header>
      <Header placeholder ="Search Regions"/>
    </header>
    <main>
      <List />
    </main>
      </div>
    );
  }
}

export default App;