import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from "./web3";

class App extends Component {
  render() {
    console.log(web3.version);
    web3.eth.getAccounts().then(acc => console.log(acc));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
