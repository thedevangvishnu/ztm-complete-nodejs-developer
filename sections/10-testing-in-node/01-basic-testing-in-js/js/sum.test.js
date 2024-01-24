const { sum } = require("./sum");

test("Adds positive numbers correcly", () => {
  expect(sum(5, 2)).toBe(7);
});

test("Adds a positive and a negative number correctly", () => {
  expect(sum(-20, 8)).toBe(-12);
});
