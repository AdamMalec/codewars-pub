// https://www.codewars.com/kata/54dc6f5a224c26032800005c

 function stockList(stockList , categories) {
  const stockObj  = {};
  const resultObj = {};

  for (const category of stockList) {
    const categoryLetter = [category[0]];
    const categoryValue = Number(category.split(' ')[1]);

    if (stockObj[categoryLetter]) stockObj[categoryLetter] += categoryValue;
    else stockObj[categoryLetter] = categoryValue;
  }

  categories.forEach(item => {
    if (stockObj[item]) resultObj[item] = stockObj[item];
    else resultObj[item] = 0;
  });

  const zeroSum = Object.values(resultObj).reduce((sum, cur) => sum + cur, 0);
  if (zeroSum === 0) return "";

  return Object.entries(resultObj).map(item => `(${item.join(' : ')})` ).join(' - ');
 }
