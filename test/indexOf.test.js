const indexOf = require("../algorithm/indexOf");

describe("indexOf would return repeative filtered string", () => {
  test("apple to aple", () => {
    expect(indexOf("apple")).toBe("aple");
  });
  test("aabbbccd to abcd", () => {
    expect(indexOf("aabbbccd")).toBe("abcd");
  });
});
