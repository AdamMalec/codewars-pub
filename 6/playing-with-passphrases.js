// https://www.codewars.com/kata/559536379512a64472000053

function playPass(s, n) {
  const sArr = [];

  for (let letter of s) {
    if (letter.codePointAt(0) >= 65 && letter.codePointAt(0) <= 90) {
      if (letter.codePointAt(0) + n > 90) {
        letter = String.fromCodePoint(65 + (letter.codePointAt(0) + n - 91));
      } else {
        letter = String.fromCodePoint(letter.codePointAt(0) + n);
      }
    } else if (Number(letter) || letter === "0") {
      letter = 9 - Number(letter);
    }

    sArr.push(letter);
  }

  const resultArr = sArr.map((item, i) => {
    if (
      String(item).codePointAt(0) >= 65 &&
      String(item).codePointAt(0) <= 90 &&
      i % 2 !== 0
    ) {
      return (item = item.toLowerCase());
    } else {
      return item;
    }
  });

  return resultArr.reverse().join("");
}
