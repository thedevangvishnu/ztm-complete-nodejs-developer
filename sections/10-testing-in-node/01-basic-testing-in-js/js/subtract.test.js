const { subtract } = require("./subtract");

test("Subtracts two numbers correctly", () => {
  expect(subtract(20, 12)).toBe(8);
});

test("Subtracts a negative and a positive number correcly", () => {
  expect(subtract(70, -16)).toBe(86);
});
