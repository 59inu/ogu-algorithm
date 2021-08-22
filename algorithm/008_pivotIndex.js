/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers
 * strictly to the left of the index is equal to the sum of all the
 * numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is
 * 0 because there are no elements to the left. This also applies to the
 * right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 *
 * 특정 요소를 중심으로 좌우 배열의 각 합이 서로 같을 때 이 요소를 피벗이라 한다.
 * 1. O(n2)
 *    a. 요소를 순회하면서: * O(n)
 *    b. 요소를 중심으로 좌 우 배열의 합을 구한다. O(n)
 *
 * 2. O(n)
 *    a. 좌우배열 합계의 초기값을 구한다(left: 0, right: sum(nums))
 *       : + O(n)
 *
 *    b. 주어진 배열을 순회하면서 (current)
 *    c. 자신을 총합에서 제외하고 (right - current)
 *    d. 자기 앞의 요소를 좌배열에 더하여 (left + )
 *    e. 비교한다.
 *       : O(n)
 */

var sort = function (nums) {
  const sum = nums.reduce((acc, num) => acc + num);
  let left = 0;
  let right = sum;
  let previous = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    right = right - num;
    left = left + previous;

    if (left === right) {
      return i;
    }

    previous = num;
  }
  return -1;
};

module.exports = sort;
