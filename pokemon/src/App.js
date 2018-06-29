import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/navbar.jsx';
import Header from './components/Header.jsx';
import List from './components/list.jsx';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Landing from './components/landing.jsx';
import Berries from './components/berries.jsx'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path="/berries" component={Berries} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
