// if we are in Heroku on production, and the request isn't over TLS, redirect.
module.exports = function(app) {
  app.get('*', function(req, res, next) {
    if (req.header('x-forwarded-proto') !== 'https') {
      return res.redirect('https://'+req.host+req.originalUrl);
    }
    next();
  });
};

