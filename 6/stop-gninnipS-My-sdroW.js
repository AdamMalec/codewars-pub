// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  const wordsArr = string.split(' ');
  const spinWordsArr = wordsArr.map((word) => {
    if (word.length >= 5) return word.split('').reverse().join('');
    return word;
  });

  return spinWordsArr.join(' ');
}
