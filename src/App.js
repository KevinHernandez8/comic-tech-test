import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Home/>
      </BrowserRouter> 
    );
  }
}

export default App;
