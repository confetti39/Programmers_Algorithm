// 문제 Url: https://school.programmers.co.kr/learn/courses/30/lessons/42748
// 다른 풀이 Url: https://school.programmers.co.kr/learn/courses/30/lessons/42748/solution_groups?language=javascript&type=all

function solution(array, commands) {
  let answer = [];
  let newArray = [];

  for (let i = 0; i < commands.length; i++) {
    newArray = array.slice(commands[i][0] - 1, commands[i][1]);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[commands[i][2] - 1]);
  }
  return answer;
}
