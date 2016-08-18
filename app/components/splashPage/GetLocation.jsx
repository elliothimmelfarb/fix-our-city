import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import ActionLocation from 'material-ui/svg-icons/maps/my-location';
import { RaisedButton, LinearProgress, Snackbar } from 'material-ui';
import * as locationActions from '../../actions/locationActions';
import * as inputActions from '../../actions/inputActions';

const getLocationButton = {
  width: '100%',
  marginBottom: '2%',
  marginTop: '12%',
};
const linear = {
  position: 'relative',
  left: '-4%',
};
const snackbarStyle = {
  backgroundColor: 'rgb(0, 188, 212)',
  animation: 'popout 1s ease',
};

class getLocation extends React.Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.clearLocation = this.clearLocation.bind(this);
  }
  getLocation() {
    this.props.getUserLocation();
  }

  clearLocation() {
    this.props.clearInputs();
  }

  render() {
    const {
      userLocation,
      loading,
      alert,
    } = this.props;

    const buttonGetLocation = Object.keys(userLocation).length > 0 ?
      <RaisedButton
        label="Cancel"
        default
        style={getLocationButton}
        onClick={this.clearLocation}
      /> :
      <RaisedButton
        icon={loading ? <LinearProgress mode="indeterminate" style={linear} /> : <ActionLocation />}
        label={loading ? 'LOADING...' : 'GET CURRENT LOCATION'}
        primary
        style={getLocationButton}
        onClick={this.getLocation}
      />;
    return (
      <div>
        <Row bottom="xs">
          <Col xs={12} md={12} lg={12}>
            {buttonGetLocation}
          </Col>
        </Row>
        <Snackbar
          open={alert}
          message="Now using your current location."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={snackbarStyle}
        />
      </div>
    );
  }
}

getLocation.propTypes = {
  userLocation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getUserLocation: PropTypes.func,
  clearInputs: PropTypes.func,
  alert: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    userLocation: state.location.location,
    loading: state.location.loading,
    alert: state.location.alert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLocation: () => dispatch(locationActions.getUserLocation()),
    clearInputs: () => dispatch(inputActions.clearInputs()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(getLocation);
