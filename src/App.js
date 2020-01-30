import React, { Component } from 'react';
import MiddleContent from './component/MiddleContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body-container">
          <MiddleContent />
        </div>
      </div>
    );
  }
}

export default App;
