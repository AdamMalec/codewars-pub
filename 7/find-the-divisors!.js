// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  const resultArr = [];

  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) {
      resultArr.push(i);
    }
  }

  if (resultArr.length === 2) {
    return `${integer} is prime`;
  } else {
    resultArr.pop();
    resultArr.shift();
    return resultArr;
  }
};
