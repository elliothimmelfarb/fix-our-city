import googleMapLoader from './google_map_loader';

const googlePlacesLoader = () => {
  return new Promise((resolve) => {
    googleMapLoader('key')
      .then(google => {
        resolve(google);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

export default googlePlacesLoader;
