'use strict';

var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

module.exports = function (app) {
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
      return res.redirect('/contact/thanks');
    });
  });
};
