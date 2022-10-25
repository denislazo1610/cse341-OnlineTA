const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Sara Birch");
});

module.exports = routes;
