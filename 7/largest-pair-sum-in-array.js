// https://www.codewars.com/kata/556196a6091a7e7f58000018

function largestPairSum(numbers) {
  let firstMax = Math.max(...numbers);
  numbers.splice(numbers.indexOf(firstMax), 1);
  let secondMax = Math.max(...numbers);
  return firstMax + secondMax;
}
