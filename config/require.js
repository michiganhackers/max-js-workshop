var Server = require(__dirname + "/server");

// Handles for the useful options 
module.exports.start    = Server.listen;
module.exports.stop     = Server.stop;
module.exports.restart  = Server.restart;
