/**
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력
 * 출력하는 문자열은 원래의 입력순서를 유지한다.
 */

const solution = (strArr) => {
  return strArr.filter((str, i) => strArr.indexOf(str) === i);
};

module.exports = solution;
