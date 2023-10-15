// https://www.codewars.com/kata/53697be005f803751e0015aa

function encode(string) {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  for (const letter of string) {
    if (vowelsArr.includes(letter)) result += vowelsArr.indexOf(letter) + 1;
    else result += letter;
  }

  return result;
}

function decode(string) {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  for (const letter of string) {
    if (Number(letter)) result += vowelsArr[letter - 1];
    else result += letter;
  }

  return result;
}
