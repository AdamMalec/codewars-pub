// https://www.codewars.com/kata/5836dce6966f8d1d43000007

function redarr(arr) {
  const set = new Set(arr);
  const sortedArr = Array.from(set).sort();
  const resultObj = {};

  for (let i = 0; i < sortedArr.length; i++) {
    resultObj[i] = sortedArr[i];
  }

  return resultObj;
}
