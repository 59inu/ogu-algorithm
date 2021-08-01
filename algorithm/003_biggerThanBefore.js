/**
 * 1 이상 100 이하 개수의 정수를 입력받아,
 * 자신의 바로 앞 수보다 큰 수만 출력
 * 첫 번째 숫자는 무조건 출력
 */

const solution = (numbers) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (i === 0) {
      result.push(num);
    } else if (num > numbers[i - 1]) {
      result.push(num);
    }
  }
  return result;
};

module.exports = solution;
