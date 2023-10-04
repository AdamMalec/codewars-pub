// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string){

  function toWeirdWord(text) {
    let weirdWord= '';
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) weirdWord += text[i].toUpperCase();
      else weirdWord += text[i];
    }
    return weirdWord;
  }

  const stringArr = string.split(' ');
  const weirdArr = stringArr.map(item => toWeirdWord(item))

  return weirdArr.join(' ');
}
