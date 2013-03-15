var Express   = require("express")

module.exports = function Logging(Server)
{
  Server.use(Express.responseTime());
  Server.use(Express.logger());
}
