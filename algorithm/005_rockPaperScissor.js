/**
 * 가위:1, 바위:2, 보:3
 * A의 회차별 가위바위보와 B의 회차별 가위바위보가 주어질 때
 * 각 회차별 이긴 사람을 출력하라, 비긴 경우 D를 출력한다
 */

const solution = (ofA, ofB) => {
  const BForAToWin = {
    1: 3,
    2: 1,
    3: 2,
  };
  const result = [];
  for (let i = 0; i < ofA.length; i++) {
    const [a, b] = [ofA[i], ofB[i]];
    //비기는 경우
    if (a === b) {
      result.push("D");
    }
    //A가 이기는 경우
    else if (BForAToWin[a] === b) {
      result.push("A");
    }
    //B가 이기는 경우
    else {
      result.push("B");
    }
  }
  return result;
};

module.exports = solution;
