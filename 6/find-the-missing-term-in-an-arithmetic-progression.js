// Find the missing term in an Arithmetic Progression

function findMissing(arr) {
  const differenceArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    differenceArr.push(Math.abs(arr[i + 1] - arr[i]));
  }

  const maxStep = Math.max(...differenceArr);
  const minStep = Math.min(...differenceArr);

  for (let i = 0; i < arr.length  - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) === maxStep) {
      if (arr[i] < 0 && arr[i + 1] > arr[i]) {
        return arr[i] + minStep;
      } else if (arr[i] < 0) {
        return arr[i] - minStep;
      }  else {
        return arr[i] + minStep;
      }
    }
  }
}
