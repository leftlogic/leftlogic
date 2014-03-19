'use strict';

var SendGrid = require('sendgrid').SendGrid;
var sendgrid = new SendGrid(
  process.env.SENDGRID_USERNAME,
  process.env.SENDGRID_PASSWORD
);

module.exports = function (app) {
  app.post('/contact', function (req, res) {
    return sendgrid.send({
      from: req.body.email,
      to: 'dcgauld@gmail.com', // Testing at the mo.
      subject: 'Contact via leftlogic.com from ' + req.body.name,
      text: req.body.message
    }, function (err, message) {
      if (err) {
        console.error(err);
        return console.log(message);
      }
      return res.redirect('/contact/thanks');
    });
  });
};
