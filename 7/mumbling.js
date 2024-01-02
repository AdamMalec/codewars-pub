// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(str) {
  const accumArr = [];

  for (let i = 0; i < str.length; i++) {
    let firstLetter = str[i].toLowerCase();
    lastPart = firstLetter.repeat(i);
    accumArr.push(firstLetter.toUpperCase() + lastPart);
  }

  return accumArr.join("-");
}
