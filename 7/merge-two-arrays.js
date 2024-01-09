// https://www.codewars.com/kata/583af10620dda4da270000c5

function mergeArrays(a, b) {
  const resultArr = [];
  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    if (a[i]) resultArr.push(a[i]);
    if (b[i]) resultArr.push(b[i]);
  }

  return resultArr;
}
