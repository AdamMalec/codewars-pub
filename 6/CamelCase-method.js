// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase = function () {
  const str = this.valueOf();
  if (!str) return str;
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
};
