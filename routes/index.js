const routes = require("express").Router();
const { nombre } = require("../controller/index");

// routes.get("/", nombre);

routes.use("/contacts", require("./contacts"));

module.exports = routes;
