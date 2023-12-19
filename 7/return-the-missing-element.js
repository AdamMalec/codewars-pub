// https://www.codewars.com/kata/5299413901337c637e000004

function getMissingElement(arr) {
  console.log(arr);
  const sortArr = arr.sort();
  if (sortArr[0] !== 0) return 0;
  if (sortArr[sortArr.length - 1] !== 9) return 9;
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i] - sortArr[i + 1] < -1) {
      return sortArr[i] + 1;
    }
  }
}
