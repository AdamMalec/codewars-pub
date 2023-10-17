// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(arr) {
  const middleEl = arr.filter((item) => item !== Math.max(...arr) && item !== Math.min(...arr));
  return arr.indexOf(...middleEl);
}
