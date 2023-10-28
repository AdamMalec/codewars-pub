// https://www.codewars.com/kata/5a86073fb17101e453000258

function sortEmotions(arr, order) {
  const emotions = {
    ":D": 0,
    ":)": 0,
    ":|": 0,
    ":(": 0,
    "T_T": 0,
  };

  const resultArr = [];

  for (const item of arr) {
    emotions[item]++;
  }

  for (const key in emotions) {
    for (let i = 0; i <= emotions[key]; i++) {
      if (i) resultArr.push(key);
    }
  }

  return order ? resultArr : resultArr.reverse();
}
