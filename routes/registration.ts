/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import firebase = require('firebase');

var router = express.Router();

router.put('/', function(req, res, next) {
  res.send('hello');
});

export = router;
