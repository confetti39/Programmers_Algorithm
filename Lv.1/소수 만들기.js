// 문제 Url: https://school.programmers.co.kr/learn/courses/30/lessons/12977
// 다른 풀이 Url: https://school.programmers.co.kr/learn/courses/30/lessons/12977/solution_groups?language=javascript&type=all

function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer += 1;
      }
    }
  }

  return answer;
}
