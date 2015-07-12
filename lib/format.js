// checks request to see if the extension is .json
module.exports = function(app, regex) {
  app.get(regex, function(req, res, next) {
    req.format = 'json';
    next();
  });
};
