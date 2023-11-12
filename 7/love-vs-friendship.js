// https://www.codewars.com/kata/59706036f6e5d1e22d000016

function wordsToMarks(string){
  const alphabet = Array.from({length: 26}, (x, i) => (i + 10).toString(36));
  let score = 0;

  for (const letter of string) {
    score += alphabet.indexOf(letter) + 1;
  }

  return score;
}
