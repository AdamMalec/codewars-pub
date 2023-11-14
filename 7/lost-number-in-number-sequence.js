// https://www.codewars.com/kata/595aa94353e43a8746000120

function findDeletedNumber(arr, mixArr) {
  const sortMixArr = mixArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortMixArr[i]) return arr[i];
  }
  return 0;
}
