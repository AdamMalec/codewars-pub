// https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5

function insideOut(x) {
  const xString = x.split(' ');
  const isEven = (word) => word.length % 2 === 0;

  const mappedXString = xString.map(word => {
    if (isEven(word)) {
      if ( word.length == 2) return word;

      const wordArr   = word.split('');
      const leftPart  = wordArr.splice(0, wordArr.length / 2).reverse();
      const rightPart = wordArr.reverse();
      const newWord   = [...leftPart, ...rightPart].join('');

      return newWord;

    } else {
      if ( word.length == 1 || word.length == 3 ) return word;

      const wordArr   = word.split('');
      const midLetter = Math.floor(wordArr.length / 2);
      const leftPart  = wordArr.slice(0, midLetter).reverse();
      const rightPart = wordArr.slice(midLetter + 1).reverse();
      const newWord   = [...leftPart, wordArr[midLetter], ...rightPart].join('');

      return newWord;
    }
  })

  return mappedXString.join('');
}
