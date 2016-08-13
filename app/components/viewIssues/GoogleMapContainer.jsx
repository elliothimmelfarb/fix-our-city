import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import { mapBoundsChanged } from '../../actions/mapActions';


const style = {
  map: {
    height: '500px',
  },
};

class GoogleMapContainer extends React.Component {

  createMarkers(issues) {
    return issues.map(issue => {});
  }

  render() {
    const {
      mapCenter,
      mapZoom,
      onBoundsChange,
      issues,
    } = this.props;

    const markers = issues && this.createMarkers(issues);

    return (
      <div style={style.map}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyBkDcntoiu9E5hKuT1l2toW-77XSvd3suo' }}
          center={mapCenter}
          zoom={mapZoom}
          minZoom={10}
          onChange={onBoundsChange}
        />
      </div>
    );
  }
}

GoogleMapContainer.propTypes = {
  mapCenter: PropTypes.object,
  mapZoom: PropTypes.number,
  onBoundsChange: PropTypes.func,
  issues: PropTypes.array,
};

const mapStateToProps = (state) => ({
  mapZoom: state.map.zoom,
  mapCenter: state.map.center,
  issues: state.map.issues,
});

const mapDispatchToProps = (dispatch) => ({
  onBoundsChange(mapInfo) {
    return dispatch(mapBoundsChanged(mapInfo));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapContainer);
