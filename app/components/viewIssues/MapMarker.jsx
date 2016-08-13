import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const styles = {
  noHover: {
    height: '10px',
    width: '10px',
    backgroundColor: 'red',
    borderRadius: '100%',
    boxShadow: '0px 0px 7px 3px black',
  },
  hover: {
    height: '20px',
    width: '20px',
    position: 'relative',
    right: '5px',
    bottom: '5px',
    backgroundColor: 'blue',
    borderRadius: '100%',
    boxShadow: '0px 0px 7px 3px black',
  },
};

const MapMarker = (props) => {
  const style = props.$hover ? styles.hover : styles.noHover;
  return (
    <div style={style}>
      {props.text}
    </div>
  );
};

MapMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  text: PropTypes.string,
  $hover: PropTypes.bool,
  id: PropTypes.bool,
};

export default MapMarker;
