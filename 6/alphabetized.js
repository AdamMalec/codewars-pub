// https://www.codewars.com/kata/5970df092ef474680a0000c9/train

function alphabetized(str) {
  const alphabet =  Array.from({length: 26}, (x, i) => (i + 10).toString(36));
  const strArr = str.split('').filter(item => alphabet.includes(item.toLowerCase()));

  strArr.sort((a, b) => {
    let lowA = a.toLowerCase();
    let lowB = b.toLowerCase();

    return lowA.codePointAt(0) - lowB.codePointAt(0);
  });

  return strArr.join('');
}
