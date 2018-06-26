import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar.jsx'
import Header from './components/Header.jsx'
import axios from 'axios'


class App extends Component {
  render() {
    return (
      <div>
      <nav> 
       <Nav />
      </nav>
    <header>
      <Header />
    </header>
      </div>
    );
  }
}

export default App;
