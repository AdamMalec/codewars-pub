// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  xArr = x.split(' ');
  xNum = xArr.map(item => {
    return item
              .split('')
              .reduce((acc, item )=>  acc + item.codePointAt(0) - 96, 0)
  })

  return xArr.at(xNum.indexOf(Math.max(...xNum)));
}
