import React, { Component} from 'react';
import { Provider } from 'mobx-react'
import { Router, Route} from 'react-router-dom'
import { RootStore } from 'stores'
import Dashboard from 'components'
import NotMatch from './404'


export default class App extends Component {
  render () {
    return (
      <Provider rootStore={new RootStore()}>
          <Router>
            <Route path="/" exact component={Dashboard} />
            <Route component={NotMatch}/>
          </Router>
      </Provider>
    );
  }
}
