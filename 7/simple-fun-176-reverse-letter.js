// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
  const abc = Array.from({length: 26}, (x, i) => (i + 10).toString(36));
  return [...str]
    .filter(item => abc.includes(item))
    .reverse()
    .join("");
}
