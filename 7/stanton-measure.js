// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b

function stantonMeasure(a){
  let counter = 0;

  a.forEach(item => {
    if (item === 1) counter++;
  });

  return a.reduce((acc, cur) => {
    if (cur === counter) acc++;
    return acc;
  }, 0)
}
