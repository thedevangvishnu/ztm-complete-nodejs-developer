const launches = new Map();

let lattestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  lattestFlightNumber++;
  const newLaunch = Object.assign(launch, {
    flightNumber: lattestFlightNumber,
    customers: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
  });

  launches.set(lattestFlightNumber, newLaunch);
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
