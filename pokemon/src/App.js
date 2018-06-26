import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar.jsx'
import Header from './components/Header.jsx'
import List from './components/list.jsx'


class App extends Component {
  render() {
    return (
      <div className='wallpaper'>
      <nav> 
       <Nav />
      </nav>
    <header>
      <Header />
    </header>
    <main>
      <List />
    </main>
      </div>
    );
  }
}

export default App;
