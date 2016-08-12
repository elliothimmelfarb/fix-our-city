import Issue from '../models/issues';


export function all(req, res) {
  Issue.find({}).exec((err, issues) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(issues);
  });
}

/**
 * Add a Issue
 */
export function add(req, res) {
  Issue.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function findNearLocation(req, res) {
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  const miles = req.body.meters * 1609.34;

  Issue.find({ location: { $nearSphere:
    { $geommetry:
    {
      type: 'Point', coordinates: [longitude, latitude],
    },
     $maxDistance: miles } } })
  .exec((err, issues) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(issues);
  });
}

export function toggleFixed(req, res) {
  Issue.findById(req.body.id).exec((err, issue) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    if (issue) {
      issue.isFixed = !issue.isFixed; // eslint-disable-line no-param-reassign
      Issue.save((err, savedIssue) => {
        if (err) {
          return res.status(400).send('Something went wrong saving the data');
        }
        return res.json(savedIssue);
      });
    } else {
      return res.status(500).send('No issue with that ID found');
    }
  });
}


export default {
  all,
  add,
  findNearLocation,
  toggleFixed,
};

