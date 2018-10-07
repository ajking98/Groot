import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" component={Home} exact/>
        <Route path="/dashboard" component={Dashboard}/>
      <div>
      </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
