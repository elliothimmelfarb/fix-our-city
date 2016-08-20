import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectIssue } from '../../actions/issueActions';
// import styles from '../../css/components/mapMarker.css';

const MapMarker = (props) => {
  // const style = props.isSelected ? styles.hover : styles.noHover;
  return (
    <div
      
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
  isSelected: PropTypes.bool.isRequired,
  markerClicked: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  markerClicked(id) {
    return dispatch(selectIssue(id));
  },
});

export default connect(null, mapDispatchToProps)(MapMarker);
