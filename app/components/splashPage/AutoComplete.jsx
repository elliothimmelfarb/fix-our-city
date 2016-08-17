import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import styles from '../../css/components/splash.css';



class AutoCompleteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

  }

  onInputUpdate(e) {
    const input = document.getElementById('splashPageInput');
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.getPlaces();
    this.setState({ city: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    // send to backend
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className={styles.formStyle}>
          <TextField
            id={'splashPageInput'}
            floatingLabelText={Object.keys(this.props.userLocation).length > 0 ? 'Current Location at '+this.props.userLocation.lat.toFixed(2)+', '+this.props.userLocation.lng.toFixed(2) : 'Location'}
            value={this.state.city}
            fullWidth
            onChange={e => this.onInputUpdate(e)}
            disabled={Object.keys(this.props.userLocation).length > 0}
            required={Object.keys(this.props.userLocation).length === 0}
            style={{ margingBottom: -40 }}
          />
        </form>
      </div>
    );
  }
}
// onChange={e => this.setState({ city: e.target.value })}
// hintText={Object.keys(this.props.userLocation).length > 0 ? 'Using your current location' : 'Location'}

function mapStateToProps(state) {
  return {
    userLocation: state.location.location,
  };
}

export default connect(mapStateToProps)(AutoCompleteInput);
