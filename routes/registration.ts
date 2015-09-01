/// <reference path='../typings/tsd.d.ts' />
/// <reference path='../client/app/models/_all.ts' />
/// <reference path='../controllers/_all'/>

import express = require('express');
import firebase = require('firebase');

var router = express.Router();

router.put('/', function(req, res, next) {
  let user = <Postman.Registration> req.body;
  let fbase = new Firebase('');

  fbase.createUser({
    email: user.email,
    password: user.password
  }, e => {
    if (e)
      res.send(500, e);
    else
      res.send('Worked');
  });
});

export = router;
