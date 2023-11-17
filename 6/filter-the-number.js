// https://www.codewars.com/kata/55b051fac50a3292a9000025/

var filterString = function(value) {
  return +value
              .split('')
              .filter(item => isFinite(item))
              .join('');
}
