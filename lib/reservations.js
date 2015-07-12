var opentok = require('opentok');

function substringExists(str1, str2){
  return str1.toUpperCase().split( str2.toUpperCase() ).length > 1
}

// pass requests through our reserved rooms
module.exports = function(app, reservations) {
  for(var reservation in reservations){
    (function(r) {
      if(!r.key || !r.secret || !r.roomName) return;
      
      // create session for each reservation
      r.opentok = opentok(r.key, r.secret);
      r.opentok.createSession(function(err, session) {
        if (err) return console.error('could not create session for a reservation');
        r.sessionId = session.sessionId;
      });
      console.log("setting reservation");

      // set up reservation specific data to request
      app.get("/:roomId", function(req, res, next) {
        if(substringExists(req.params.roomId, r.roomName)) {
          req.sessionId = r.sessionId;
          req.token = r.opentok.generateToken(req.sessionId, { role: 'moderator' });
          req.apiKey = r.key;
          next();
        }else{
          next();
        }
      });
      app.get('/archive/:archiveId/:roomId', function(req, res, next) {
        if(substringExists(req.params.roomId, r.roomName)) {
          r.opentok.getArchive(req.params.archiveId, function(error,archive){
            req.archiveInfo = error ? {error: error} : {archive: archive};
            next();
          });
        }else{
          next();
        }
      });
      app.post('/archive/:sessionId', function(req, res, next) {
        if(substringExists(req.body.roomId, r.roomName)) {
          function archiveCallback(error, archive){
            req.archiveInfo = error ? {error: error} : {archive: archive};
            next();
          }
          if( req.body.action === "start" ){
            r.opentok.startArchive(req.params.sessionId, {name: req.body.roomId}, archiveCallback);
          }else{
            r.opentok.stopArchive(req.body.archiveId, archiveCallback);
          }
        }else{
          next();
        }
      });

    }(reservations[reservation]));
  }
};

