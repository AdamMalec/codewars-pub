// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = function(size) {
  const resultArr = [];

  for (let i = 1; i <= size; i++) {
    const tempArr = [];
    for (let j = 1; j <= size; j++) {
      tempArr.push(i * j);
    }
    resultArr.push(tempArr);
  }

  return resultArr;
}
