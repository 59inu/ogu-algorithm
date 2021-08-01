/**
 * 소문자로 된 한 개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램
 * 제거된 문자열의 각 문자는 원래 문자열 순서를 유지한다.
 *
 * >>>>>>>>>>>
 * 각 문자를 순회하면서 현재 문자의 인덱스가
 * 문자열에 존재하는 해당 문자의 첫번째 인덱스와 일치하는 경우에만
 * 결과 문자열에 더한다.
 *
 */

const indexOf = (str) => {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  return unique;
};

module.exports = indexOf;
