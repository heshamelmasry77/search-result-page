// @flow
import React, {Component} from 'react';

import Routes from './routes';
import './stylesheets/App.css';
import Header from './components/Shared/Header';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Routes/>
        </div>
    );
  }
}

export default App;
