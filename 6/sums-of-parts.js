// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(arr) {
  const totalSum = arr.reduce((acc, item) => acc + item, 0);

  const resultArr = arr.reduce((acc, item, i) => {
    acc.push(acc[i] - item);
    return acc;
  }, [totalSum]);

  return resultArr;
}
