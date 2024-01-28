function arrayLeaders(numbers) {
  const resultArr = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    const rightPart = numbers.slice(i + 1);
    const rightSum = rightPart.reduce((acc, cur) => acc + cur, 0);
    if (numbers[i] > rightSum) resultArr.push(numbers[i]);
  }

  if (numbers[numbers.length - 1] > 0){
    resultArr.push(numbers[numbers.length - 1]);
  }

  return resultArr;
}
