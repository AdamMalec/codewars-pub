// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(str) {
  const strArr = str.split("");

  for (let i = 0; i < str.length; i++) {
    const letter = strArr[i].toLowerCase();
    tempArr = [...strArr].map(el => el.toLowerCase());
    tempArr.splice(i, 1);

    if (!tempArr.includes(letter)) {
      return strArr[i];
    }
  }

  return '';
}
