// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function revrot(str, sz) {
  if(sz <= 0) return "";
  if(sz > str.length) return "";

  const chunkArr = [];
  const resultArr = [];

  for (let i = 0; i < str.length; i += sz) {
    chunkArr.push(str.slice(i, i+sz));
  }

  for (const chunk of chunkArr) {
    if (chunk.length < sz) continue;

    const isUndivisible = chunk
                            .split('')
                            .map(item => Number(item)**3)
                            .reduce((acc, cur) => acc + cur, 0)
                            % 2;

    if (isUndivisible) {
      let moveItem = chunk[0];
      resultArr.push(chunk.slice(1) + moveItem);
    } else {
      resultArr.push(chunk.split('').reverse().join(''));
    }
  }

  return resultArr.join('');
}
