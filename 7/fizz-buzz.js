// https://www.codewars.com/kata/5300901726d12b80e8000498

function fizzbuzz(n) {
  const resultArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FizzBuzz");
      continue;
    }

    if (i % 5 === 0) {
      resultArr.push("Buzz");
      continue;
    }

    if (i % 3 === 0) {
      resultArr.push("Fizz");
      continue;
    }

    resultArr.push(i);
  }

  return resultArr;
}

console.log(fizzbuzz(10)); //[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
