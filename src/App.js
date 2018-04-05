import React, { Component } from 'react';
import{ Switch, BrowserRouter, Route } from 'react-router-dom';

import IndexPage from './components/IndexPage';
import SettingsPage from './components/SettingsPage';

import rootStyle from './rootStyle';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className={rootStyle}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
