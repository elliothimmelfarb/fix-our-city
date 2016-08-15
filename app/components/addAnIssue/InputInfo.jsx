import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import * as inputActions from '../../actions/inputActions';

const TextFieldStyle = {
  marginBottom: '5%',
};

class InputInfo extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Col xs={8} md={8} lg={8}>
        <TextField
          hintText="Title"
          floatingLabelText="Title"
          fullWidth

          onChange={e => this.props.inputTitle(e.target.value)}
          required
        />

        <TextField
          hintText="Description"
          floatingLabelText="Description"
          multiLine
          rows={2}
          style={TextFieldStyle}
          fullWidth

          onChange={e => this.props.inputDescription(e.target.value)}
          required
        />
      </Col>

    );
  }
}

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
