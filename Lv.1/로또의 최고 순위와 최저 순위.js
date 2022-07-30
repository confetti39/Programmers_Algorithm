// 문제 Url: https://school.programmers.co.kr/learn/courses/30/lessons/77484
// 다른 풀이 Url: https://school.programmers.co.kr/learn/courses/30/lessons/77484/solution_groups?language=javascript&type=all

function solution(lottos, win_nums) {
  let answer = [];
  let matchCount = 0;
  let zeroCount = 0;
  let maxRank = 0;
  let minRank = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j]) matchCount++;
    }
  }

  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) zeroCount++;
  }

  console.log(zeroCount, matchCount);

  if (zeroCount === 0) {
    if (matchCount >= 2) {
      maxRank = 7 - matchCount;
      minRank = 7 - matchCount;
    } else if (matchCount < 2) {
      maxRank = 6;
      minRank = 6;
    }
  }

  if (zeroCount !== 0) {
    let countSum = zeroCount + matchCount; // maxRank에 잠시 0의 개수와 match 개수를 넣는다.
    if (countSum >= 2) {
      maxRank = 7 - countSum;
      if (matchCount >= 2) minRank = 7 - matchCount;
      else if (matchCount < 2) minRank = 6;
    } else if (countSum < 2) {
      maxRank = 6;
      minRank = 6;
    }
  }

  answer = [maxRank, minRank];

  return answer;
}
