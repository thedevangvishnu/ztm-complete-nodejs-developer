const {
  getAllLaunches,
  addNewLaunch,
} = require("../../models/launches/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  let { mission, rocket, destination, launchDate } = launch;
  launchDate = new Date(launchDate);
  console.log(launchDate);

  // input validation
  if (!mission || !rocket || !destination || !launchDate) {
    return res.status(400).json({
      error: "Mission launch properties",
    });
  }

  if (isNaN(launchDate)) {
    return res.status(400).json({
      error: "Incorrect launch date",
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
