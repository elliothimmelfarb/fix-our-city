const GoogleMapsLoader = require('google-maps');

const googlePlacesLoader = (key) =>
  new Promise((resolve) => {
    GoogleMapsLoader.KEY = key;
    GoogleMapsLoader.LIBRARIES = ['places'];
    GoogleMapsLoader.REGION = 'US';
    GoogleMapsLoader.load(google => {
      resolve(google.maps.places);
    });
  });

export default googlePlacesLoader;
