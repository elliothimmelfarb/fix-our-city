import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';

const style = {
  map: {
    height: '500 px',
    width: '700 px',
  },
};


const GoogleMapContainer = (props) => {
  const {
    mapCenter,
    mapZoom,
  } = props;

  return (
    <GoogleMap
      style={style.map}
      apiKey={'AIzaSyBkDcntoiu9E5hKuT1l2toW-77XSvd3suo'}
      center={[59.938043, 30.337157]}
      zoom={7}
    />
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

// const mapDispatchToProps = (dispatch) => ({
//
// });

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapContainer);
