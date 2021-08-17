/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * key: 매 단계마다 탐색 범위를 절반으로 줄여나간다.
 *
 * 1. 배열 요소가 정렬 상태일 때
 * 2. 특정 값의 위치를 찾을 때
 *
 * big-O: O(log n)
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    if (nums[pivot] === target) {
      return pivot;
    }
    if (nums[pivot] > target) {
      right = pivot - 1;
      continue;
    }
    if (nums[pivot] < target) {
      left = pivot + 1;
      continue;
    }
  }
  return -1;
};

module.exports = search;
