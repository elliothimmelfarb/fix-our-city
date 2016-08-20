import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Tags from './dropdownTags';
import * as inputActions from '../../actions/inputActions';

const tagStyle = {
  float: 'left',
  textAlign: 'left',
};

const InputInfo = (props) => (
  <Col xs={12} md={12} lg={12}>
    <TextField
      hintText="Title"
      floatingLabelText="Title"
      fullWidth
      value={props.title}
      onChange={e => props.inputTitle(e.target.value)}
      required
    />
    <TextField
      hintText="Description"
      floatingLabelText="Description"
      multiLine
      fullWidth
      value={props.description}
      onChange={e => props.inputDescription(e.target.value)}
      required
    />
    <Tags style={tagStyle} />
  </Col>

    );

InputInfo.propTypes = {
  inputTitle: PropTypes.func.isRequired,
  inputDescription: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


function mapStateToProps(state) {
  return {
    title: state.input.title,
    description: state.input.description,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputTitle: title => dispatch(inputActions.inputTitle(title)),
    inputDescription: description => dispatch(inputActions.inputDescription(description)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputInfo);
