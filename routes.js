'use strict';

var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var fs = require('fs');
console.log(__dirname);
var fourohfour = null;

module.exports = function (app) {
  app.get(['/projects/entity-lookup', '/lounge/articles/entity-lookup'], function (req, res) {
    res.redirect('http://entity-lookup.leftlogic.com');
  });

  app.post('/contact', function (req, res) {
    return sendgrid.send({
      from: req.body.email_address,
      to: 'info@leftlogic.com',
      subject: 'Contact via leftlogic.com from ' + req.body.full_name,
      text: req.body.message
    }, function (err, message) {
      if (err) {
        console.error(err);
        return console.log(message);
      }
      return res.redirect('/thanks');
    });
  });

  // 404
  app.use(function (req, res, next) {
    if (!fourohfour) {
      try {
        fourohfour = fs.readFileSync(__dirname + '/www/404.html');
      } catch (e) {

      }
    }

    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
      res.header('content-type', 'text/html');
      res.send(fourohfour);
      return;
    }

    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');

  });
};
