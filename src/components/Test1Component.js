import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';


/** @component Test1Component */
class Test1Component extends Component {
  render() {
    return (<div>Test Component 1</div>);
  }
}

const mapStateToProps = state => {
  return {};
}

Test1Component.propTypes = {
};

export default connect(mapStateToProps)(Test1Component)