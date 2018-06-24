import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';


/** @component Test2Component */
class Test2Component extends Component {
  render() {
    return (<div>Test Component 2</div> );
  }
}

const mapStateToProps = state => {
  return {};
}

Test2Component.propTypes = {
};

export default connect(mapStateToProps)(Test2Component)