const express = require('express');

const router = new express.Router();

// api /api/issues

router.get('/', (req, res) => {
  res.send('api/issues');
});

module.exports = router;
