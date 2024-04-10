// https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
  return array.reduce((acc, cur, idx, arr) => {
    if (idx === arr.length - 1) return acc;
    let max = cur * arr[idx + 1];
    return max > acc ? max : acc;
  }, -Infinity)
}
