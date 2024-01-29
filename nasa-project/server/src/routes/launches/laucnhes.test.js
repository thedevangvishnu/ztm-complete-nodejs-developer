const request = require("supertest");
const app = require("../../app");
const { connectToMongo, disconnectToMongo } = require("../../services/mongo");

describe("Launches API", () => {
  beforeAll(async () => {
    await connectToMongo();
  });

  afterAll(async () => {
    await disconnectToMongo();
  });

  describe("Test GET /launches", () => {
    test("Get all launches with 200 success", async () => {
      const response = await request(app)
        .get("/launches")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("Test POST /launches", () => {
    const completeLaunchData = {
      mission: "USS Enterprise",
      rocket: "NCC 1801-D",
      target: "Kepler-452 b",
      launchDate: "January 4, 2028",
    };

    const launchDataWithoutDate = {
      mission: "USS Enterprise",
      rocket: "NCC 1801-D",
      target: "Kepler-452 b",
    };

    const launchDataWithIncorrectDate = {
      mission: "USS Enterprise",
      rocket: "NCC 1801-D",
      target: "Kepler-452 b",
      launchDate: "hello",
    };

    test("Post launch with 201 created", async () => {
      const response = await request(app)
        .post("/launches")
        .send(completeLaunchData)
        .expect("Content-Type", /json/)
        .expect(201);

      const requestDate = new Date(completeLaunchData.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();

      expect(responseDate).toBe(requestDate);
      expect(response.body).toMatchObject(launchDataWithoutDate);
    });

    test("Catch error: missing input properties", async () => {
      const response = await request(app)
        .post("/launches")
        .send(launchDataWithoutDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required launch property",
      });
    });

    test("Catch error: invalid launch date", async () => {
      const response = await request(app)
        .post("/launches")
        .send(launchDataWithIncorrectDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Invalid launch date",
      });
    });
  });
});
