const { parse } = require("csv-parse");
const fs = require("fs");
const { platform } = require("os");

const habitablePlanets = [];
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

fs.createReadStream("./kepler-data.csv")
  .pipe(parser)
  .on("data", (data) => {
    if (isHabitable(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log("Following are the habitable planets:");
    habitablePlanets.forEach((planet) => console.log(planet["kepler_name"]));
  });
