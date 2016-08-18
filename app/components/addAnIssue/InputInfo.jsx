import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Tags from './dropdownTags';
import * as inputActions from '../../actions/inputActions';

const TextFieldStyle = {
  marginBottom: '5%',
};

class InputInfo extends React.Component {
  render() {
    return (
      <Col xs={12} md={12} lg={12}>
        <TextField
          hintText="Title"
          floatingLabelText="Title"
          fullWidth
          value={this.props.title}
          onChange={e => this.props.inputTitle(e.target.value)}
          required
        />
        <TextField
          hintText="Description"
          floatingLabelText="Description"
          multiLine
          fullWidth
          value={this.props.description}
          onChange={e => this.props.inputDescription(e.target.value)}
          required
        />
        <Tags />
      </Col>

    );
  }
}

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
