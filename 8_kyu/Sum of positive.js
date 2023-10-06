// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// 나의 풀이
function positiveSum (arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++)
    if(arr[i] > 0) result += arr[i];
  return result;
};

// 제일 많이 푼방법
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}

// 나의 경우에는 조건문 false일때는 아무런 결과를 원하지 않기 때문에
// 중괄호 {} 를 생략하고 코드를 단순화 하였다.
