const rockPaperScissor = require("../algorithm/005_rockPaperScissor");

test("ABABD", () => {
  const a = [2, 3, 3, 1, 3];
  const b = [1, 1, 2, 2, 3];
  const result = ["A", "B", "A", "B", "D"];
  expect(rockPaperScissor(a, b)).toStrictEqual(result);
});
