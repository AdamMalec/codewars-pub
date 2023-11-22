// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

function evenNumbers(array, number) {
  const resultArr = [];
  const lastIndex = array.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    if (array[i] % 2 === 0) resultArr.push(array[i]);
    if (resultArr.length === number) break;
  }

  return resultArr.reverse();
}
