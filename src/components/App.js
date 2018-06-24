import React, { Component } from 'react'
import {
  Switch, BrowserRouter,
  Route, Redirect
} from 'react-router-dom'
import BaseComponent from './BaseComponent'
import * as PATH from '../constants/path'
import { isUserAuthenticated } from '../helpers/authHelper'
import Error404Component from './Error404Component';

/** @component: App */
class App extends Component {
  render() {

    //Temporary
    const LOGIN = () => (<h1>LOGIN PAGE</h1>);

    /**
     * @description If User is Authenticated,
     * redirect to base URL.
     * Otherwise, display Login Component
     */
    const LoginRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) => !isUserAuthenticated(this)
            ? <LOGIN {...props} />
            : <Redirect to={{ pathname: '/', state: { originLocation: props.location } }} />} />
      )
    }

    /** @description If User is Authenticated,
     * display BaseComponent with the contentComponent props 
     * to be displayed in the content area.
     * Otherwise, redirect to /login URL.
     */
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) => isUserAuthenticated(this)
            ? <BaseComponent {...props} />
            : <Redirect to={{ pathname: '/login', state: { originLocation: props.location } }} />} />
      )
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path={PATH.ERR_404} component={Error404Component} />
          <LoginRoute path={PATH.LOGIN} />
          <PrivateRoute path={PATH.BASE} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App