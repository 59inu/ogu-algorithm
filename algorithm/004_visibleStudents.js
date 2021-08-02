/**
 * n(1 <= n <= 1000)명의 학생을 일렬로 세웠다.
 * 맨 앞에 서있는 선생님이 볼 수 있는 학생의 수를 리턴.
 * (자기 앞에 서있는 사람이 자기보다 작을 때만 앞에서 보인다.)
 */

const solution = (talls) => {
  let highest = Number.MIN_SAFE_INTEGER;
  const visible = [];
  talls.forEach((tall) => {
    if (tall > highest) {
      highest = tall;
      visible.push(tall);
    }
  });
  return visible;
};

module.exports = solution;
