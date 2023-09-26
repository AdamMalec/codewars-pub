// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2

function sumNoDuplicates(numList) {
  const resObj = {};
  numList.forEach((item) => {
    if (item in resObj) {
      resObj[item]++
    } else {
      resObj[item] = 1;
    }
  })

  let sum = 0;
  for (let key in resObj) {
    if (resObj[key] > 1) continue
    else sum += +key;
  }

  return sum ;
}
