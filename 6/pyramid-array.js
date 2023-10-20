// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid(n) {
  const resultArr = [];

  if (n === 0) return resultArr;

  for (let i = 1; i <= n; i++) {
    const tempArr = [];
    for (let j = 0; j < i; j++) {
      tempArr.push(1);
    }
    resultArr.push(tempArr);
  }

  return resultArr;
}
