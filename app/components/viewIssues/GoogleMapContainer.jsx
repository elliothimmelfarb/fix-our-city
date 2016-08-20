import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../../lib/google-map-react';
import Snackbar from 'material-ui/Snackbar';
import { mapBoundsChanged } from '../../actions/mapActions';
import MapMarker from './MapMarker';


const style = {
  map: {
    height: '500px',
    width: '100%',
  },
  snackbar: {
    position: 'absolute',
    bottom: 110,
  },
  snackBody: {
    backgroundColor: '#FF4081',
  },
};


class GoogleMapContainer extends React.Component {


  createMarkers(issues) {
    /* eslint-disable no-underscore-dangle */
    return issues.map(issue => {
      let isSelected = issue.obj._id === this.props.selectedId;
      return (
        <MapMarker
          isSelected={isSelected}
          key={issue.obj._id}
          id={issue.obj._id}
          lat={issue.obj.location.coordinates[1]}
          lng={issue.obj.location.coordinates[0]}
        />
      );
    });
    /* eslint-enable no-underscore-dangle */
  }

  componentWillMount() {
    if (typeof google === 'undefined') {
      // this.context.router.push('/');
    }
  }

  createMapOptions() {
    return {
      mapTypeControl: true,
      panControl: false,
      styles: [{
        stylers: [
          { saturation: -50 },
          { gamma: 1 },
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
    const noIssuesError = (
      <Snackbar
        style={style.snackbar}
        bodyStyle={style.snackBody}
        open={issues.length === 0}
        message="No issues in this area"

      />
    );

    const key = process.env.GOOGLE_MAPS_KEY;

    return (
      <div style={style.map}>
        <GoogleMap
          bootstrapURLKeys={{ key }}
          center={mapCenter}
          defaultZoom={15}
          minZoom={5}
          onChange={onBoundsChange}
          options={this.createMapOptions}
        >
          {markers}
        < /GoogleMap>

          {noIssuesError}
      </div>
    );
  }
}

GoogleMapContainer.propTypes = {
  mapCenter: PropTypes.object,
  onBoundsChange: PropTypes.func,
  issues: PropTypes.array,
  selectedId: PropTypes.string,
};

GoogleMapContainer.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = (state) => ({
  mapCenter: state.map.center,
  issues: state.issues.list,
  selectedId: state.issues.selectedId,
});

const mapDispatchToProps = (dispatch) => ({
  onBoundsChange(mapInfo) {
    return dispatch(mapBoundsChanged(mapInfo));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapContainer);
