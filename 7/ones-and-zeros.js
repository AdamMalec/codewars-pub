// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

function binaryArrayToNumber(arr) {
  let maxPow = arr.length - 1;
  let result = 0;

  arr.forEach(element => {
    result += element * (2 ** maxPow);
    maxPow -= 1;
  });

  return result;
};
