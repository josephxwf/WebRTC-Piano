// anything with p2p in the first path segment, has only one path segment, and can only end with
// extension .json
// NOTE: this can probably be done more readibly if we catch all requests and use the `path` module
// to structure the request for us. this approach favors utilizing express' routers existing logic.
module.exports = function(app, regex) {
  app.get(regex, function(req, res, next) {
    console.log('a p2p room was requested');
    if (!('sessionProperties' in req)) req.sessionProperties = {};
    req.sessionProperties.mediaMode = 'relayed';
    next();
  });
};

