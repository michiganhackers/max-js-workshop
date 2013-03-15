const CONTROLLER_PATH = __dirname + "/../app/controllers";

var Pages = require(CONTROLLER_PATH + "/pages_controller");

module.exports = function Router(Server)
{
  Server.get("/", Pages.Resume.get);
}
