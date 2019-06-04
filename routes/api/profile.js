const express = require('express');
const router = express.Router();

// @route     post api/profile
// @desc      test route
// @access    Public
router.post('/', (req, res) => res.send('profile route'));

module.exports = router;
