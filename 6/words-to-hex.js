// https://www.codewars.com/kata/596e91b48c92ceff0c00001f

function wordsToHex(words) {
  const resultArr = [];
  const wordsArr = words.split(" ");

  for (const word of wordsArr) {
    let leftLetters = word.substring(0, 3);
    let hexLetters = leftLetters
      .split("")
      .map((letter) => letter.codePointAt(0).toString(16));
    while (hexLetters.length < 3) hexLetters.push("00");
    resultArr.push("#" + hexLetters.join(""));
  }

  return resultArr;
}
