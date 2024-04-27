// https://www.codewars.com/kata/580a4734d6df748060000045

function isSortedAndHow(array) {
  const resObj = {
    asc: 0,
    desc: 0,
  }

  for (let i = 1; i < array.length; i++) {
    array[i - 1] < array[i]? resObj.asc++ : resObj.desc++
  }

  if(resObj.asc && !resObj.desc) return "yes, ascending"
  else if(!resObj.asc && resObj.desc) return "yes, descending"
  else return "no"
}
