const routes = require("express").Router();
const { nombre } = require("../controller/index");

routes.get("/", nombre);

module.exports = routes;
