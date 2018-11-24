import React, { Component } from 'react';

import Provider from './context';

import Header from './components/Header';
import Contacts from './components/Contacts';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header header="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
