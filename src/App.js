import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/spaces">
          All Spaces
        </Link>
        <div>
          Hello World
        </div>
      </div>
    );
  }
}

export default App;
