const filterRepeated = require("../algorithm/filterRepeated");

describe("filterRepeated should remove repeated string from input strings", () => {
  test('"good", "time", "good", "time", "student" to "good", "time", "student"', () => {
    const test = ["good", "time", "good", "time", "student"];
    const result = ["good", "time", "student"];
    expect(filterRepeated(test)).toStrictEqual(result);
  });
});
