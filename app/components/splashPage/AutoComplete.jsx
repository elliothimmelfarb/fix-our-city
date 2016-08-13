import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

class AutoCompleteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("work");
    // send to backend
  }
  render() {
    const formStyle = {
      width: '100%',
      marginBottom: '5%',
    };
    return (
      <div>
        <form onSubmit={this.onSubmit} style={formStyle}>
        {/*
          <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        */}
        <TextField
          hintText={Object.keys(this.props.userLocation).length > 0 ? 'Using your current location' : 'Location'}
          floatingLabelText={Object.keys(this.props.userLocation).length > 0 ? 'Using your current location' : 'Location'}
          value={this.state.city}
          fullWidth={true}
          onChange={e => this.setState({ city: e.target.value })}
          disabled={Object.keys(this.props.userLocation).length > 0}
          required={Object.keys(this.props.userLocation).length === 0}
        />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLocation: state.location.location,
  };
}

export default connect(mapStateToProps)(AutoCompleteInput);
