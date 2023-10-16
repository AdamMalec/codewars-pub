// https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data) {
  const byteArr = [];

  while (data.length > 0) {
    byteArr.push(data.slice(0 ,8));
    data.splice(0 ,8);
  }

  return byteArr.reverse().flat();
}
