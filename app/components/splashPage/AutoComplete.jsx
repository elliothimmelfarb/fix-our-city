import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import googlePlacesLoader from '../../api/google/googlePlacesLoader';
import { inputLocation } from '../../actions/inputActions';


class AutoCompleteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    };
  }

  componentDidMount() {
    const input = document.getElementById('splashPageInput');
    googlePlacesLoader(process.env.GOOGLE_MAPS_KEY)
      .then(places => {
        const options = { types: ['geocode'], componentRestrictions: { country: 'us' } };
        this.searchBox = new places.Autocomplete(input, options);
      });
  }

  onInputFocus() {
    // const input = document.getElementById('splashPageInput');
    // const options = { types: ['geocode'], componentRestrictions: { country: 'us' } };
    // this.searchBox = new google.maps.places.Autocomplete(input, options);
  }

  onInputUpdate(e) {
    this.props.updateInput(e.target.value);
    this.setState({ city: e.target.value });
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText={
            Object.keys(this.props.userLocation).length > 0 ?
            `Current Location at ${this.props.userLocation.lat.toFixed(2)}
            ${this.props.userLocation.lng.toFixed(2)}` :
            'Location'
          }
          onChange={e => this.onInputUpdate(e)}
          value={this.state.city}
          fullWidth
          disabled={Object.keys(this.props.userLocation).length > 0}
          required={Object.keys(this.props.userLocation).length === 0}
          style={{ margingBottom: -40 }}
        >
          <input
            id={'splashPageInput'}
            placeholder={''}
            type={'text'}
            onFocus={() => this.onInputFocus()}
            onBlur={e => this.onInputUpdate(e)}
            required
          />
        </TextField>
      </div>
    );
  }
}

AutoCompleteInput.propTypes = {
  userLocation: PropTypes.object,
  updateInput: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userLocation: state.location.location,
});

const mapDispatchToProps = (dispatch) => ({
  updateInput: (val) => dispatch(inputLocation(val)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteInput);
