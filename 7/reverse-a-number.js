// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

function reverseNumber(n) {
  let str = String(Math.abs(n));
  let strArr = [...str.split('')];
  let reverseStrArr = strArr.reverse();
  let reverseStr = reverseStrArr.join('');
  let num = Number(reverseStr);

  return (n < 0) ? 0 - num : num;
};
