const planetsModel = require("../../models/planets/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(planetsModel);
}

module.exports = {
  getAllPlanets,
};
