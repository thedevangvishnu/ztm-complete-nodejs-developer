const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = require("./planets.mongo");

const filePath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "data",
  "kepler-data.csv"
);

const parser = parse({
  comment: "#",
  columns: true,
});

const isHabitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.37 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      {
        keplerName: planet.kepler_name,
      },
      {
        upsert: true,
      }
    );
  } catch (error) {
    console.error(`Could not save planet ${error}`);
  }
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(parser)
      .on("data", async (data) => {
        if (isHabitable(data)) {
          await savePlanet(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", async () => {
        resolve();
      });
  });
}

async function getAllPlanets() {
  return await planets.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
