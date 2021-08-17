/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * - 아이디어 1: 0을 찾을 때마다 맨 뒤로 옮긴다. (모든 0에 대하여 0의 인덱스 변경, 0 이후의 모든 요소 인덱스 +1)
 * - 아이디어 2: 0을 찾을 때마다 버블 스왑 (모든 0에 대하여 n-x 회 스왑)
 * => big-O : 0(n) * 0의 개수
 *
 * key: 배열 요소를 순회하면서 0이 아닌 숫자를 찾아 앞으로(타겟 포지션으로) 보낸다.
 *      1. 포지션 포인터(맨 앞부터 시작해 스와핑 실행 시 조건부 이동),
 *      2. 스왑 타겟 포인터(순회 이동)
 *
 * big-O: O(n)
 */
var moveZeroes = function (nums) {
  let wIdx = 0;

  for (let check = 0; check < nums.length; check++) {
    //스왑타겟포인터 요소가 0이 아닌 숫자라면
    //wIdx에 숫자를 덮어쓴다.
    if (nums[check] > 0) {
      nums[wIdx] = nums[check];
      wIdx += 1;
    }
  }

  return nums.slice(0, wIdx).concat(Array(nums.length - wIdx).fill(0));
};

module.exports = moveZeroes;
