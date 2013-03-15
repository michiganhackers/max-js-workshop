const VIEW_PATH = __dirname + "/../app/views";

module.exports = function(Server)
{
  // Use Jade by default
  Server.set("view engine", "jade");

  // Set the base views path
  Server.set("views", VIEW_PATH);

  // Set the view options
  Server.set("view options", {
    layout: false
  });
}
