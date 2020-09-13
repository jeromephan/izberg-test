import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import Favorites from './views/Favorites';
import Pokemon from './views/Pokemon';
import Topbar from './components/Topbar/Topbar';

const App = () => (
  <div className='app'>
    <Router>
      <Topbar />
      <Switch>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/'>
          <Pokemon />
        </Route>
      </Switch>
      <Route path='/pokemon/:pokemon'>
        <Modal />
      </Route>
      <Route path='/favorites/:pokemon'>
        <Modal />
      </Route>
    </Router>
  </div>
);

export default App;
