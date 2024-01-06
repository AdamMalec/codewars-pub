// https://www.codewars.com/kata/5340298112fa30e786000688

function twosDifference(arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    arr.some((item, index) => {
      if (Math.abs(item - arr[i]) == 2) {
        resultArr.push([item, arr[i]].sort((a, b) => a - b));
        arr.splice(i, 1);
        i--;
      }
    });
  }

  return resultArr.sort((a, b) => a[0] - b[0]);
}
