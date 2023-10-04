// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if ( Math.abs(array[i].codePointAt(0) - array[i + 1].codePointAt(0)) > 1 ) {
      return String.fromCodePoint(array[i].codePointAt(0) + 1);
    }
  }
}
