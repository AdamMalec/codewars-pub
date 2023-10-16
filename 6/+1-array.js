// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
  if (
    arr.length === 0 ||
    arr.some((item) => item < 0) ||
    arr.some((item) => item > 9)
  ) return null;


  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i] += 1;
      break;
    } else {
      arr[i] = 0;
    }
  }

  if (arr.every((item) => item === 0)) arr.unshift(1);
  return arr;
}
