import React, { Component } from 'react';
import './App.css';
import AuthLayout from './containers/auth/AuthLayout';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <AuthLayout />
      </div>
    );
  }
}

export default App;
