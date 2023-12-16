// https://www.codewars.com/kata/5a434a9dc5e284724f000011

function replaceCommon(string, letter) {
  const storeObj = {};
  for (const letter of string) {
    if (letter === " ") continue;
    if (storeObj[letter]) {
      storeObj[letter] += 1;
    } else {
      storeObj[letter] = 1;
    }
  }

  const maxCount = Math.max(...Object.values(storeObj));
  let maxLetter = '';

  for (const key in storeObj) {
    if (storeObj[key] === maxCount) {
      maxLetter = key;
      break;
    }
  }

  return string.replaceAll(maxLetter, letter);
}
