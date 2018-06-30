import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/navbar.jsx';
import Header from './components/Header.jsx';
import List from './components/list.jsx';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Landing from './components/landing.jsx';
import Berries from './components/berries.jsx';
import Evolutions from './components/evolutions.jsx';
import Games  from './components/games.jsx';
import Items from './components/items.jsx';
import Locations from './components/locations.jsx';
import Encounters from './components/encounters.jsx';
import Natures from './components/natures.jsx';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path="/berries" component={Berries} />
        <Route exact path="/evolutions" component={Evolutions} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/encounters" component={Encounters} />
        <Route exact path="/natures" component={Natures} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
