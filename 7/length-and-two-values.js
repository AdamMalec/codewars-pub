// https://www.codewars.com/kata/62a611067274990047f431a8

function alternate(n, firstValue, secondValue){
  const resultArr = [];

  for (let i = 0; i < n; i++) {
    if ( i % 2 === 0) resultArr.push(firstValue);
    else resultArr.push(secondValue)
  }

  return resultArr;
}
