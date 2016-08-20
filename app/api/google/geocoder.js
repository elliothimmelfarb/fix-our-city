import googleMapLoader from 'google-map-react/lib/utils/loaders/google_map_loader';


const geocode = (address) =>
  new Promise((resolve, reject) => {
    googleMapLoader('AIzaSyC2Ljl_7KIYLlF7oui-0nmd5p-phCzamUo')
      .then(google => {
        const geocoder = new google.Geocoder();

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
