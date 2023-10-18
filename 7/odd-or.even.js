// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven (arr) {
  if (arr.length === 0) return 'even';
  const sum = arr.reduce((sum, cur) => sum + cur, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}
