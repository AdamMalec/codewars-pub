// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data) {
  return data.map((item) => {
    if (item[0] >= 55 && item[1] > 7) {
      return "Senior";
    }
    return "Open";
  })
};
