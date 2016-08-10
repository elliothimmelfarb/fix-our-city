const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.send('api/issues');
});

module.exports = router;
