// https://www.codewars.com/kata/5ba38ba180824a86850000f7

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const rightArr = arr.slice(i+1);

    if (rightArr.includes(current)) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}
