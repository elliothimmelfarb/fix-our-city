import GoogleMapsLoader from './googleMapsLoader';

const getRadius = (center, corner) =>
  new Promise((resolve) => {
    GoogleMapsLoader.load(google => {
      const radius = google.maps.geometry.spherical.computeDistanceBetween(center, corner);
      resolve(radius);
    });
  });

export default getRadius;
