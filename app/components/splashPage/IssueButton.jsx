import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import { RaisedButton, Snackbar } from 'material-ui';
import geocode from '../../api/google/geocoder';
import { setUserLocation } from '../../actions/locationActions';


const buttonStyle = {
  marginTop: '6%',
  width: '100%',
  marginBottom: '2%',
};

class IssueButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      snackBarOpen: false,
    };

    this.validateGeocode = this.validateGeocode.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({ snackBarOpen: false });
  }
  validateGeocode(address) {
    const { locationValidated, location } = this.props;
    if (location.lat) {
      this.context.router.push('/view-issues');
    } else {
      geocode(address)
        .then(location => {
          console.log('location', location);
          const coords = {
            latitude: location.lat(),
            longitude: location.lng(),
          };
          locationValidated(coords);
          this.context.router.push('/view-issues');
        })
        .catch(status => {
          this.setState({ snackBarOpen: true });
        });
    }
  }
  render() {
    const { locationInput } = this.props;
    return (
      <div>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Link to="/add-an-issue">
              <RaisedButton label="Add Issue" primary style={buttonStyle} />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <RaisedButton
              onClick={() => this.validateGeocode(locationInput)}
              label="View Issues"
              primary
              style={buttonStyle}
            />
          </Col>
        </Row>
        <Snackbar
          open={this.state.snackBarOpen}
          message="Please add an address"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{ backgroundColor: '#F44336' }}
        />
      </div>
    );
  }
}
// <Link to="/view-issues">
// </Link>

IssueButton.propTypes = {
  locationInput: PropTypes.string,
  locationValidated: PropTypes.func.isRequired,
  address: PropTypes.string,
  location: PropTypes.obj,
};

IssueButton.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = (state) => ({
  locationInput: state.input.location,
  location: state.location.location,
});

const mapDispatchToProps = (dispatch) => ({
  locationValidated: (coords) => dispatch(setUserLocation(coords)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueButton);
