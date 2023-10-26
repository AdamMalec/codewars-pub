// https://www.codewars.com/kata/539ee3b6757843632d00026b

var capitals = function (word) {
	var resultArr = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) resultArr.push(i)
  }

  return resultArr;
};
