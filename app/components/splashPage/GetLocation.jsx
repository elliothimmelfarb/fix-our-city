import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import ActionLocation from 'material-ui/svg-icons/maps/my-location';
import LinearProgress from 'material-ui/LinearProgress';
import * as locationActions from '../../actions/locationActions';

const getLocationButton = {
  width: '100%',
  marginBottom: '2%',
  marginTop: '12%',
};
const linear = {
  position: 'relative',
  left: '-4%',
};

class getLocation extends React.Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
  }
  getLocation() {
    this.props.getUserLocation();
  }
  render() {
    return (
      <div>
        <Row bottom="xs">
          <Col xs={12} md={12} lg={12}>
            <RaisedButton
              icon={this.props.loading ?
                <LinearProgress mode="indeterminate" style={linear} />
                : <ActionLocation />}
              label={this.props.loading ? 'LOADING...' : 'GET CURRENT LOCATION'}
              primary
              style={getLocationButton}
              onClick={this.getLocation}
            />
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
};

function mapStateToProps(state) {
  return {
    userLocation: state.location.location,
    loading: state.location.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLocation: () => dispatch(locationActions.getUserLocation()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(getLocation);
