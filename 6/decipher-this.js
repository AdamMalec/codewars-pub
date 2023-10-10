// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  const strArr = str.split(" ");
  const resultArr = [];

  strArr.forEach((item) => {
    let numLength = String(parseInt(item)).length;
    let letter = String.fromCodePoint(parseInt(item));

    if (item.length > numLength) {
      item = letter + item.slice(numLength);

      if (item.length >= 3) {
        let secondLetter = item[1];
        let lastLetter = item[item.length - 1];
        item = item[0] + lastLetter + item.slice(2, -1) + secondLetter;
        resultArr.push(item);
      } else {
        resultArr.push(item);
      }

    } else {
      item = letter;
      resultArr.push(item);
    }
  });

  return resultArr.join(" ");
}
