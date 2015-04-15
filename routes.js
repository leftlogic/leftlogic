'use strict';

var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var fs = require('fs');

var fourohfour = null;

module.exports.error = error;
module.exports.contact = contact;

function contact(req, res, next) {
  return sendgrid.send({
    replyTo: req.body.email_address,
    to: 'info@leftlogic.com',
    subject: 'Contact via leftlogic.com from ' + req.body.full_name,
    text: req.body.message
  }, function (err, message) {
    console.log('sent email from ' + req.body.email_address, message);
    if (err) {
      console.error(err);
      return next(err);
    }
    return res.redirect('/thanks');
  });
}

function error(req, res, next) {
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

};
