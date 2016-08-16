const express = require('express');

const router = new express.Router();

router.use('/issues', require('./issues'));

module.exports = router;
