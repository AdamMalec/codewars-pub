function solve(arr){
  const alphabet = Array.from({length: 26}, (x, i) => (i + 10).toString(36));
  return arr.map((item) => {
    return item
      .toLowerCase()
      .split('')
      .filter((x,i) => i === alphabet.indexOf(x))
      .length
  })
};
