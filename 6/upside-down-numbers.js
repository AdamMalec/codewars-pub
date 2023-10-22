// https://www.codewars.com/kata/59f7597716049833200001eb

function solve(x, y) {
  let counter = 0;

  for (let i = x; i < y; i++) {
    const numArr = String(i).split("");

    if (
      numArr.every(
        (item) =>
          item === "0" ||
          item === "1" ||
          item === "6" ||
          item === "8" ||
          item === "9"
      )
    ) {
      const rotatedNumArr = [...numArr].reverse().map((item) => {
        if (item === "6") return "9";
        if (item === "9") return "6";
        return item;
      });

      if (numArr.join("") === rotatedNumArr.join("")) {
        counter++;
      }
    }
  }

  return counter;
}
