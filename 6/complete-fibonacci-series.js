// https://www.codewars.com/kata/5239f06d20eeab9deb00049b/train/javascript

function fibonacci(n) {
  if (n < 1) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  if (n === 3) return [0, 1, 1];

  const resultArr = [0, 1, 1, ...Array(n - 3)];

  for (let i = 3; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i - 2] + resultArr[i - 1];
  }

  return resultArr;
}
