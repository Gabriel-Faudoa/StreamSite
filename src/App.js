import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Routing from './Routing';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routing />
      </div>
    );
  }
}

export default App;
