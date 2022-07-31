// 문제 Url: https://school.programmers.co.kr/learn/courses/30/lessons/86051
// 다른 풀이 Url: https://school.programmers.co.kr/learn/courses/30/lessons/86051/solution_groups?language=javascript&type=all

function solution(numbers) {
  let result = 0;

  for (let i = 0; i < 10; i++) {
    if (numbers.includes(i)) continue;
    else if (!numbers.includes(i)) result += i;
  }

  return result;
}
