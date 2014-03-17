'use strict';

module.exports = function (app) {
  app.post('/contact', function (req, res) {
    // handle sending email out
    res.redirect('/contact-thanks');
  });
};