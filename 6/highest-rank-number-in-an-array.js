// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr) {
  const tempObj = {};

  for (const item of arr) {
    tempObj[item] ? tempObj[item]++ : (tempObj[item] = 1);
  }

  const entriesArr = Object.entries(tempObj);
  const maxCounter = Math.max(...entriesArr.map(item => item[1]));
  const highestItems = entriesArr.filter(item => item[1] === maxCounter);
  const highestSortedItems = (highestItems.map(item => +item[0]).sort());

  return highestSortedItems.at(-1);
}
