var Express       = require("express")
  , Server        = Express()
  , Colors        = require("colors")
  , Settings      = require(__dirname + "/settings")
  , Router        = require(__dirname + "/router")
  , Logging       = require(__dirname + "/logging")
  , ErrorHandler  = require(__dirname + "/error_handler")
  , Views         = require(__dirname + "/views")
  , Static        = require(__dirname + "/static")
;

const SERVER_PORT = Settings.port; 

// Zero-Config modules
Server.use(Express.favicon());
Server.use(Express.query());
Server.use(Express.bodyParser());
Server.use(Express.methodOverride());

// Logging configuration
Logging(Server);

// Public assets configuration 
Static(Server);

// Routing configuration and registration
Router(Server); Server.use(Server.router);

// Error handling configuration
ErrorHandler(Server);

// View configuration
Views(Server);

// Listen on the default port, or a custom parameter
module.exports.listen = function listen(subject) {
  Server.listen(subject||SERVER_PORT);
  console.log("Server is listening on port".yellow, subject||SERVER_PORT);
}

// Implement these later
module.exports.stop = function stop() {}
module.exports.restart = function restart() {}
