# Piano++ WebRTC Videochat Client

## File Overview
* `Procfile` is required to run the nodejs app on Heroku
* `package.json` contains all npm modules to run the app
* `app.js` contains all server side code  
* `config.js` contains configurations: TokBox credentials, p2p mesh support, Redis support, reserved rooms, etc.  
* `lib` folder contains all the code to handle configurations: p2p mesh support, Redis support, reserved rooms, etc.   
* `views` folder contains the html template for the app
* `public/css` folder contains all the css for the app.    
  Look for files with `.scss` extensions. `.css` files are generated from sass.
* `public/js` contains the front end code and interactions with OpenTok SDK.  
