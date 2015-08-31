/// <reference path='../typings/tsd.d.ts' />

import express = require('express');

var router = express.Router();

router.put('/', function(req, res, next) {
  res.send('worked');
});

export = router;
