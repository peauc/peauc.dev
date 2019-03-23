import * as React from 'react';
import './App.scss';

import Navbar from './components/navbar';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navbar links={["hello", "holla"]} logo={'blank'}/>
      </div>
    );
  }
}

export default App;
