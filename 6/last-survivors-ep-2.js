// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651

function lastSurvivors(str) {
  let arr = str.split("");

  for (var i = 0; i < arr.length; i++) {
    let letter = arr[i];
    const slicedArr = arr.slice(i + 1);
    const letterIndex = slicedArr.indexOf(letter);

    if (letterIndex !== -1) {
      const leftPart = arr.slice(0, i);
      slicedArr.splice(letterIndex, 1);
      let codePointFrom = arr[i].codePointAt(0);

      if (codePointFrom === 122) {
        arr = [...leftPart, 'a', ...slicedArr];
      } else {
        arr = [...leftPart, String.fromCodePoint(codePointFrom + 1) , ...slicedArr];
      }

      i = -1;
    }
  }

  return arr.join('');
}
