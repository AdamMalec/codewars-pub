// https://www.codewars.com/kata/5959ec605595565f5c00002b

function reverseBits(num) {
  return parseInt([...num.toString(2)].reverse().join(''), 2);
}
