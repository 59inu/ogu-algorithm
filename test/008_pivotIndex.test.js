const sort = require("../algorithm/008_pivotIndex");

describe("find pivot index", () => {
  test("[1,7,3,6,5,6] to 3", () => {
    const input = [1, 7, 3, 6, 5, 6];
    const output = 3;
    expect(sort(input)).toBe(output);
  });
  test("[1,2,3] to -1", () => {
    const input = [1, 2, 3];
    const output = -1;
    expect(sort(input)).toBe(output);
  });
});
