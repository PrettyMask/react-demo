import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import RouterCenter from './pages/routerCenter.js';
import './App.scss';
import './styleCommon/styel.scss';

class App extends Component {
  render() {
      return (
          <div id={'FairyLady'}>
              <BrowserRouter>
                  <RouterCenter />
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
