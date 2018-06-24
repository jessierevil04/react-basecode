import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as PATH from '../constants/path'

/** @component Error404Component */
class Error404Component extends Component {

  render() {
    let originLocation;

    try { 
      originLocation = this.props.location.state.originLocation.pathname;
    } catch(e) {
      originLocation = null;
    }

    return (
      <div>
        {!originLocation ? <Redirect to={PATH.BASE}/> : null }

        <h1>404</h1>
        <h3>Page not found</h3>
        <p>We are sorry but the page {originLocation} you are looking for does not exist.</p>
      </div>
    );
  }

}


const mapStateToProps = state => {

  return {}

}

export default connect(mapStateToProps)(Error404Component)