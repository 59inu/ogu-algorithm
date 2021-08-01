const biggerThanBefore = require("../algorithm/003_biggerThanBefore");

describe("biggerThanBefore", () => {
  test("1 to 1", () => {
    const test = [1];
    expect(biggerThanBefore(test)).toStrictEqual(test);
  });
  test("7, 3, 9, 5 to 7, 9", () => {
    const test = [7, 3, 9, 5];
    const result = [7, 9];
    expect(biggerThanBefore(test)).toStrictEqual(result);
  });
});
