import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectMarker } from '../../actions/mapActions';
import styles from '../../css/components/mapMarker.css';

const MapMarker = (props) => {
  const style = props.$hover ? styles.hover : styles.noHover;
  return (
    <div
      className={style}
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
