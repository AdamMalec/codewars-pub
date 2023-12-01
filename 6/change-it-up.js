// https://www.codewars.com/kata/58039f8efca342e4f0000023

function changer(str) {
  const alphabet = Array.from({length: 26}, (x, i) => (i + 10).toString(36));
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
    .split('')
    .map(i => {
      let letter = i.toLowerCase();
      if (alphabet.includes(letter)) {
        if (alphabet.indexOf(letter) == 25) {
          letter = alphabet[0];
        } else {
          letter = alphabet[alphabet.indexOf(letter) + 1]
        }
        if (vowels.includes(letter)) letter = letter.toUpperCase()
      }
      return letter;
    })
    .join('');
}
