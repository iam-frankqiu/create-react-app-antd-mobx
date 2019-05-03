import React, { Component} from 'react';
import { Provider } from 'react-mobx'
import { Router, Route} from 'react-router'
import rootStore from ''

export default class App extends Component {
  render () {
    return (
      <Provider rootStore={new rootStore()}>
          <Router>
            <Route ></Route>
          </Router>  
      </Provider>
    );
  }
}
