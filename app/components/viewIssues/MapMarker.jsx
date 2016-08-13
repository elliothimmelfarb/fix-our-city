import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectMarker } from '../../actions/mapActions';

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
    <div
      style={style}
      onClick={() => props.markerClicked(props.id)}
    >
      {props.text}
    </div>
  );
};

MapMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  $hover: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  markerClicked: PropTypes.func.isRequired,
  text: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  markerClicked(id) {
    return dispatch(selectMarker(id));
  },
});

export default connect(null, mapDispatchToProps)(MapMarker);
