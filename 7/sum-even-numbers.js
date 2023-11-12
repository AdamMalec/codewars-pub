// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

function sumEvenNumbers(input) {
  return input
    .filter(item => item % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}
