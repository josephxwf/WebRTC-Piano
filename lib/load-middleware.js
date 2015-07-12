// anything with p2p in the first path segment, has only one path segment, and can only end with
// extension .json
// NOTE: this can probably be done more readibly if we catch all requests and use the `path` module
// to structure the request for us. this approach favors utilizing express' routers existing logic.
var tlsCheck   = require('./tls-check'),
    p2pCheck   = require('./p2p-check'),
    format     = require('./format'),
    reservations = require('./reservations');

module.exports = function(app, config) {
  if(config.web.env === 'production') tlsCheck(app); // check for https redirect (if needed)
  if(config.middleware.reservations) reservations(app, config.middleware.reservations); // check for https redirect (if needed)
  if(config.middleware.p2p) p2pCheck(app, config.middleware.p2p); // check for p2p
  if(config.middleware.json) format(app, config.middleware.json); // check for .json requests
};


