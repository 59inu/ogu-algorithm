const search = require("../algorithm/006_binarySearch");

describe("[-1,0,3,5,9,12] target 9 : 4", () => {
  test("[] to 1", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    expect(search(nums, target)).toBe(4);
  });
  test("[1,2,3,4,5] target 4 : 3", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 4;
    expect(search(nums, target)).toBe(3);
  });

  test("[1,3,4,5,7] target 6 : -1", () => {
    const nums = [1, 3, 4, 5, 7];
    const target = 6;
    expect(search(nums, target)).toBe(-1);
  });
});
