// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
  const textArr = [...text.toLowerCase()];
  const tempObj = {};
  let result = 0;

  textArr.forEach((item) => {
    if (item in tempObj) {
      tempObj[item]++
    } else {
      tempObj[item] = 1;
    }
  })

  for (const key in tempObj) {
    if (tempObj[key] >= 2) result++
  }

  return result;
}
