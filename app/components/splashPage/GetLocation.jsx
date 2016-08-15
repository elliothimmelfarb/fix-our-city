import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import ActionLocation from 'material-ui/svg-icons/maps/my-location';
import CircularProgress from 'material-ui/CircularProgress';
import * as getCurrLocationActions from '../../actions/getCurrLocationActions';
import styles from '../../css/components/splash.css';

const getLocationButton = {
  width: '100%',
  marginBottom: '2%',
  marginTop: '12%',
};
const progress = {
  top: '-5%',
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
              icon={this.props.loading ? <CircularProgress size={0.4} style={progress}/> : <ActionLocation />}
              label="GET CURRENT LOCATION"
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



function mapStateToProps(state) {
  return {
    userLocation: state.location.location,
    loading: state.location.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLocation: () => dispatch(getCurrLocationActions.getUserLocation()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(getLocation);
