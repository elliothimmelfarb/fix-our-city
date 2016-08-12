import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import styles from '../../css/components/googleMapContainer.css';


const style = {
  map: {
    height: '400px',
  },
};

const GoogleMapContainer = (mapProps) => {
  const {
    mapCenter,
    mapZoom,
  } = mapProps;

  return (
    <div style={style.map}>
      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyBkDcntoiu9E5hKuT1l2toW-77XSvd3suo' }}
        center={mapCenter}
        zoom={mapZoom}
        minZoom={10}
      />
    </div>
  );
};

GoogleMapContainer.propTypes = {
  mapCenter: PropTypes.array,
  mapZoom: PropTypes.number,
};

const mapStateToProps = (state) => ({
  mapZoom: state.map.zoom,
  mapCenter: state.map.center,
});


export default connect(mapStateToProps)(GoogleMapContainer);
