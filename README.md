# Left Logic v2

Over at http://leftlogic.com (hosted on a Heroku instance, but intending to move across to Dokku if possible).

Running on Node, using [Harp](https://github.com/sintaxi/harp).

There's two modes: development (`npm start`) and production (`NODE_ENV=production node server.js`).

Production will use Harp to generate static content. Then using the same technique in [harp-static](https://github.com/remy/harp-static) requests are mapped to their `.html` output files.

There's also some custom 404 handling and a custom handler for the contact form.

The code pushed to master also goes via [travis-ci](https://travis-ci.org/leftlogic/leftlogic) and if it passes the tests (which is: does this compile successfully to static HTML), then automatically deploy to the Heroku instance.

[Get in touch](http://leftlogic.com/contact) if you'd like us to build something like this for you, or using Node.js.

Otherwise, enjoy the source!

– Remy
