import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount(){
    setTimeout(function() {
      document.getElementById('main').classList.remove('is-loading');
    });
  }

  render() {
    return (
      <div className="App">
        <div id="main" className="is-loading">
        	<h1>
        		<Link to="/spaces">P.O.P.O.S.</Link>
        	</h1>
        </div>
      </div>
    );
  }
}

export default App;
