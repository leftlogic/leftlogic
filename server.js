'use strict'
var harp = require('harp');
var server = require('harp-static');
var path = __dirname + '/www';
var port = process.env.PORT || 5000;

harp.compile(__dirname, path, function (err) {
  if (err) {
    console.log(JSON.stringify(err, null, 2));
    process.exit(1);
  }
  console.log('Left Logic is up and running on port ' + port);
  server(path, port);
});