// https://www.codewars.com/kata/563f879ecbb8fcab31000041

function factory(x) {
  const multiVal = x;

  return function (arr) {
    return arr.map((item) => item * multiVal);
  };
}
