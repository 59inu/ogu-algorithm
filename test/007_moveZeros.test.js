const moveZeroes = require("../algorithm/007_moveZeros");

describe("moveZeroes", () => {
  test("[0,1,0,3,12] to [1,3,12,0,0]", () => {
    const input = [0, 1, 0, 3, 12];
    const output = [1, 3, 12, 0, 0];
    expect(moveZeroes(input)).toStrictEqual(output);
  });
  test("[0] to [0]", () => {
    const input = [0];
    const output = [0];
    expect(moveZeroes(input)).toStrictEqual(output);
  });
  test("[1,1,2] to [1,1,2]", () => {
    const input = [1, 1, 2];
    const output = [1, 1, 2];
    expect(moveZeroes(input)).toStrictEqual(output);
  });
});
