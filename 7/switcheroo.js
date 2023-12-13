// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

function switcheroo(str) {
  const strArr = str.split('');
  const replacedStrArr = str.replaceAll('a', 'b').split('');

  const resultArr = replacedStrArr.map((element, i) => {
    if (element === strArr[i] && element !== 'c') {
      element = 'a';
      return element;
    } else {
      return element;
    }
  });

  return resultArr.join('');
}
