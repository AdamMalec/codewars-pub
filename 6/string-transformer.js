// https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str) {
  const strArr = str.split(' ');
  const mappedStrArr = strArr.map(word => {
    let resultWord = '';

    for (let letter of word) {
      letter.codePointAt(0) > 90
        ? resultWord += letter.toUpperCase()
        : resultWord += letter.toLowerCase();
    }

    return resultWord;
  })

  return mappedStrArr.reverse().join(' ');
}
