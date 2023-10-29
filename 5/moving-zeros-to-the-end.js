// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  const zeroArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr.splice(i, 1));
      i -= 1;
    }
  }

  arr.push(...zeroArr.flat());
  return arr;
}
