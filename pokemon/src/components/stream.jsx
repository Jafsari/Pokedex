import React, { Component } from 'react';
import Nav from './navbar.jsx';
import Header from './Header.jsx';
import List from './list.jsx';
import '../App.css';


class App extends Component {
    componentDidMount(){

    }
  render() {
    return (
      <div className='wallpaper'>
      <nav> 
       <Nav />
      </nav>
    <header>
      <Header placeholder ="Search Streams"/>
    </header>
    <main>
      <List />
    </main>
      </div>
    );
  }
}

export default App;