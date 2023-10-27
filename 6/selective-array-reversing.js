// https://www.codewars.com/kata/58f6000bc0ec6451960000fd

function selReverse(array, length) {
  if (length === 0 || length === 1) return array;

  const partArr = [];

  while (array.length) {
    partArr.push(array.splice(0, length));
  }

  for (let item of partArr) {
    item.reverse();
  }

  return partArr.flat();
}
