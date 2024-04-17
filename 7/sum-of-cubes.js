// https://www.codewars.com/kata/59a8570b570190d313000037

function sumCubes(n) {
  const resultArr = [];

  for (let i = 1; i <= n; i++) {
    resultArr.push(i**3);
  }

  return resultArr.reduce((acc, cur) => acc + cur);
}
