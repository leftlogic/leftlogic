'use strict';

var express = require('express');
var harp = require('harp');
var routes = require('./routes');
var app = express();
var port = process.env.PORT || 9000;
var staticPath = __dirname + '/www';

app.configure('production', function () {
  // find all the .html files in this compiled version so that visitors can
  // link to /foo/bar and we'll know that there's a .html that they actually
  // wanted to request.
  var glob = require('glob');
  var htmlFiles = [];

  console.log('Compiling static content...');

  harp.compile(__dirname + '/public', staticPath, function (err) {
    if (err) {
      console.log('Compilation fail.');
      console.log(JSON.stringify(err, null, 2));
      process.exit(1);
    }

    console.log('Compilation complete.');

    glob('**/*.html', {
      cwd: staticPath,
      dot: false
    }, function (er, files) {
      htmlFiles = files.map(function (file) {
        return '/' + file;
      });
    });

  });

  // custom middleware to patch requests to `/about` to `/about.html`
  app.use(function (req, res, next) {
    req.url = req.url.replace(/\?.*$/, '');
    if (htmlFiles.indexOf(req.url + '.html') !== -1) {
      // then we requested /foo/bar and we know there's a
      // generated file that matches
      req.url += '.html';
    }
    next();
  });
  app.use(express.static(staticPath));
});

// for development, use the dynamic version of harp
app.configure('development', function () {
  console.log('running in dev');
  app.configure(function () {
    app.use(express.static(__dirname + '/public'));
    app.use(harp.mount(__dirname + '/public'));
  });
});

app.configure(function () {
  app.use(express.bodyParser());
  app.use(app.router);
  routes(app);
});

app.listen(port, function () {
  console.log('Left Logic is up and running on http://localhost:' + port);
});
