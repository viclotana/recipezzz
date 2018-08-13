import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import RecipeList from './components/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    );
  }
}

export default App;
