import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';


/** @component Test3Component */
class Test3Component extends Component {
  render() {
    return (<div>Test Component 3</div> );
  }
}

const mapStateToProps = state => {
  return {};
}

Test3Component.propTypes = {
};

export default connect(mapStateToProps)(Test3Component)