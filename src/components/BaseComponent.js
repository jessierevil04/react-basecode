import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import * as BaseTemplate from '../templates/baseTemplate'
import '../styles/base.css';

/** @component BaseComponent */
class BaseComponent extends Component {
  render() {
    return BaseTemplate.getTemplate(this);
  }
}

const mapStateToProps = state => {
  return {
    itemTextValue: state.baseReducer.itemTextValue,
    itemList: state.baseReducer.itemList,
  }
}

BaseComponent.propTypes = {
  itemTextValue: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(BaseComponent)