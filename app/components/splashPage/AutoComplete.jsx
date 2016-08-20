import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import googlePlacesLoader from '../../api/google/googlePlacesLoader';
import { inputLocation } from '../../actions/inputActions';


class AutoCompleteInput extends React.Component {
  onInputFocus() {
    const input = document.getElementById('locationInput');
    googlePlacesLoader()
      .then(google => {
        const options = { types: ['geocode'], componentRestrictions: { country: 'us' } };
        this.searchBox = new google.places.Autocomplete(input, options);
      });
  }

  onInputUpdate(e) {
    this.props.updateInput(e.target.value);
  }

  unfocus() {
    this.searchBox = null;
    setTimeout(() => {
      const location = document.getElementById('locationInput').value;
      this.props.updateInput(location);
    }, 10);
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText={
            Object.keys(this.props.userLocation).length > 0 ?
            `Location at ${this.props.userLocation.lat.toFixed(2)}
            ${this.props.userLocation.lng.toFixed(2)}` :
            'Location'
          }
          onChange={e => this.onInputUpdate(e)}
          fullWidth
          disabled={Object.keys(this.props.userLocation).length > 0}
          required={Object.keys(this.props.userLocation).length === 0}
          style={{ margingBottom: -40 }}
        >
          <input
            id={'locationInput'}
            value={this.props.locationInput}
            placeholder={''}
            type={'text'}
            onFocus={() => this.onInputFocus()}
            onBlur={() => this.unfocus()}
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
  locationInput: PropTypes.string,
};

const mapStateToProps = (state) => ({
  userLocation: state.location.location,
  locationInput: state.input.location,
});

const mapDispatchToProps = (dispatch) => ({
  updateInput: (val) => dispatch(inputLocation(val)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteInput);
