import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import { mapBoundsChanged } from '../../actions/mapActions';
import MapMarker from './MapMarker';


const style = {
  map: {
    height: '500px',
    width: '100%',
  },
};

class GoogleMapContainer extends React.Component {

  createMarkers(issues) {
    /* eslint-disable no-underscore-dangle */
    return issues.map(issue => (
      <MapMarker
        key={issue.obj._id}
        id={issue.obj._id}
        lat={issue.obj.location.coordinates[1]}
        lng={issue.obj.location.coordinates[0]}
      />
    ));
    /* eslint-enable no-underscore-dangle */
  }

  createMapOptions() {
    return {
      mapTypeControl: true,
      styles: [{
        stylers: [
          { saturation: -50 },
          { gamma: 0.2 },
          { lightness: 4 },
          { visibility: 'on' },
        ],
      }],
    };
  }

  render() {
    const {
      mapCenter,
      onBoundsChange,
      issues,
    } = this.props;

    const markers = issues && this.createMarkers(issues);

    return (
      <div style={style.map}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyC2Ljl_7KIYLlF7oui-0nmd5p-phCzamUo' }}
          center={mapCenter}
          defaultZoom={15}
          minZoom={10}
          onChange={onBoundsChange}
          options={this.createMapOptions}
        >
          {markers}
        < /GoogleMap>
      </div>
    );
  }
}

GoogleMapContainer.propTypes = {
  mapCenter: PropTypes.object,
  onBoundsChange: PropTypes.func,
  issues: PropTypes.array,
};

const mapStateToProps = (state) => ({
  mapCenter: state.map.center,
  issues: state.issues.list,
});

const mapDispatchToProps = (dispatch) => ({
  onBoundsChange(mapInfo) {
    return dispatch(mapBoundsChanged(mapInfo));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapContainer);
