// https://www.codewars.com/kata/57ea70aa5500adfe8a000110

function foldArray(array, runs) {
  if (array.length === 1) return array;
  let protoArr = [...array];
  let resultArr = [];
  console.log(Math.floor(array.length / 2));

  while (runs > 0) {
    resultArr = []

    for (let i = 0; i < Math.floor(protoArr.length / 2); i++) {
      let leftNum = protoArr[i];
      let rightNum = protoArr[protoArr.length - 1 - i];
      resultArr.push(leftNum + rightNum);
    }

    if (protoArr.length % 2) resultArr.push(protoArr[Math.floor(protoArr.length / 2)]);
    protoArr = [...resultArr];

    runs -= 1;
  }

  return resultArr;
}

foldArray([1, 2, 3, 4, 5], 3); //  [ 6, 6, 3 ]
