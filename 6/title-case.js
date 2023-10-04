https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords='') {
  const titleArr = title.split(' ').map(item => item.toLowerCase());
  const minorWordsArr = minorWords.split(' ').map(item => item.toLowerCase());

  const resultArr = titleArr.map(item => {
    if ( minorWordsArr.some(some => some === item)) return item;
    else return item = item[0].toUpperCase() + item.slice(1);
  })

  if(resultArr[0]) resultArr[0] = resultArr[0][0].toUpperCase() + resultArr[0].slice(1);
  return resultArr.join(' ');
}
