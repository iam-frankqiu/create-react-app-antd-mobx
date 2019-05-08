import React, { Component} from 'react';
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { RootStore } from 'stores'
import {Dashboard, Exception as NotMatch} from 'pages'
// import NotMatch from 'pages/404'


export class App extends Component {
  render () {
    return (
      <Provider rootStore={new RootStore()}>
          <Router>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route component={NotMatch}/>
            </Switch>
          </Router>
      </Provider>
    );
  }
}