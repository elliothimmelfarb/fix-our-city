import React from 'react';
import { connect } from 'react-redux';
import * as getCurrLocationActions from '../../actions/getCurrLocationActions';
import { Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionLocation from 'material-ui/svg-icons/maps/my-location';
import LoadingLocation from 'material-ui/svg-icons/navigation/more-horiz';
import injectTapEventPlugin from 'react-tap-event-plugin';

const getLocationButton = {
  width: '100%',
  marginBottom: '2%',
};
class getLocation extends React.Component {
  constructor(props){
    super(props);
    this.getLocation = this.getLocation.bind(this);
  }
  getLocation() {
    console.log('click!');
    this.props.getUserLocation()
  }
  render(){
    return (
      <div>
        <Row bottom="xs">
          <Col xs={12} md={12} lg={12}>
            <RaisedButton
              secondary={true}
              icon={this.props.loading ? <LoadingLocation /> : <ActionLocation />}
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
