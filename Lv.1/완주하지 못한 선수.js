// 문제 Url: https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 다른 풀이 Url: https://school.programmers.co.kr/learn/courses/30/lessons/42576/solution_groups?language=javascript&type=all

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  if (participant[completion.length - 1] === completion[completion.length - 1])
    return participant.pop();
}
