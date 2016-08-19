import googleMapLoader from 'google-map-react/lib/utils/loaders/google_map_loader';

const geocode = (address) =>
  new Promise((resolve, reject) => {
    googleMapLoader(process.env.GOOGLE_MAPS_KEY)
      .then(google => {
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({
          address,
        }, (results, status) => {
          if (status === 'OK') {
            resolve(results[0].geometry.location);
          } else {
            reject(status);
          }
        });
      });
  });


export default geocode;
