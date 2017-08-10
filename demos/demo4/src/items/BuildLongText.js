import React from 'react';
import PropTypes from 'prop-types';

export default class BuildLongText extends React.Component {
  render () {
    return <h1>Long Text</h1>;
  }
}


BuildLongText.PropTypes = {
  contentUp: PropTypes.string.isRequired,
  contentDown: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  upContent: PropTypes.func.isRequired,
  myId: PropTypes.number.isRequired,
  type: PropTypes.element.isRequired
};

