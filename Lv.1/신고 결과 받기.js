// 문제 Url: https://school.programmers.co.kr/learn/courses/30/lessons/92334
// 다른 풀이 Url: https://school.programmers.co.kr/learn/courses/30/lessons/92334/solution_groups?language=javascript&type=all

function solution(id_list, report, k) {
  let reportObject = {}; // 신고당한 횟수 저장하는 object
  let answerObject = {}; // 정답 object
  let array = []; // report 원소 " " 기준으로 문자열 자른 결과 배열
  let answer = []; // 신고 처리 결과를 각 유저 별로 메일을 보내야 하는 횟수 배열
  let blockUser = []; // k번 이상 신고를 받아 정지된 유저 배열
  report = [...new Set(report)]; // report 배열 중복 제거

  for (let i = 0; i < id_list.length; i++) {
    reportObject[id_list[i]] = 0;
    answerObject[id_list[i]] = 0;
  }

  for (let j = 0; j < report.length; j++) {
    array.push(report[j].split(" "));
    reportObject[array[j][1]]++;
  }

  for (let i in reportObject) {
    if (reportObject[i] >= k) blockUser.push(i);
  }

  for (let i = 0; i < array.length; i++) {
    if (blockUser.includes(array[i][1])) {
      answerObject[array[i][0]]++;
    }
  }

  for (let i in answerObject) {
    answer.push(answerObject[i]);
  }

  return answer;
}
