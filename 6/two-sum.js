// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  const resultArr = [];

  numbers.forEach((item, i) => {
    for (let j = i + 1; j < numbers.length; j++) {
      if (item + numbers[j] === target) {
        resultArr.push(i, j);
        break
      }
    }
  })

  return resultArr;
}
