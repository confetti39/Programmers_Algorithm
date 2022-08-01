// 문제 Url: https://school.programmers.co.kr/learn/courses/30/lessons/70128
// 다른 풀이 Url: https://school.programmers.co.kr/learn/courses/30/lessons/70128/solution_groups?language=javascript&type=all

function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) answer += a[i] * b[i];

  return answer;
}
