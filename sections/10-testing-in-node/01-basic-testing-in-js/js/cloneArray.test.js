const { cloneArray } = require("./cloneArray");

const array = [1, 2, 3];
test("Clones an existing array and creates a new one", () => {
  expect(cloneArray(array)).toEqual(array);
});

test("Doesn't clone the existing array referring the same object in memory", () => {
  expect(cloneArray(array)).not.toBe(array);
});
