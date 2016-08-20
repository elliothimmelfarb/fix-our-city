import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import ActionLocation from 'material-ui/svg-icons/maps/my-location';
import ClearLocation from 'material-ui/svg-icons/communication/location-off';
import { RaisedButton, LinearProgress, Snackbar } from 'material-ui';
import * as locationActions from '../../actions/locationActions';
import * as inputActions from '../../actions/inputActions';

const getLocationButton = {
  width: '100%',
  marginBottom: '2%',
  marginTop: '9%',
};
const linear = {
  position: 'relative',
  width: '100%',
  marginBottom: '2%',
  marginTop: '15%',
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
    this.handleClose = this.handleClose.bind(this);
  }
  getLocation() {
    this.props.getUserLocation();
  }

  clearLocation() {
    this.props.clearInputs();
  }

  handleClose() {
    this.props.toggleAlert();
  }

  render() {
    const {
      userLocation,
      loading,
      alert,
    } = this.props;


    const buttonGetLocation = Object.keys(userLocation).length > 0 ?
      <RaisedButton
        icon={<ClearLocation />}
        label=""
        default
        style={getLocationButton}
        onClick={this.clearLocation}
      /> :
      <RaisedButton
        icon={<ActionLocation />}
        label={loading ? 'LOADING...' : ''}
        primary
        style={getLocationButton}
        onClick={this.getLocation}
      />;
    const loadingButton = loading ?
      <LinearProgress mode="indeterminate" style={linear} /> : buttonGetLocation;
    return (
      <div>
        <Row bottom="xs">
          <Col xs={12} md={12} lg={12}>
            {loadingButton}
          </Col>
        </Row>
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
  toggleAlert: PropTypes.func,
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
    toggleAlert: () => dispatch(locationActions.toggleAlert()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(getLocation);
