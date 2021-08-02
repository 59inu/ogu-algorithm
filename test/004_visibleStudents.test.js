const visibleStudents = require("../algorithm/004_visibleStudents");

test("130, 148, 127, 150, 149 to 130, 148, 150", () => {
  const test = [130, 148, 127, 150, 149];
  const result = [130, 148, 150];
  expect(visibleStudents(test)).toStrictEqual(result);
});
