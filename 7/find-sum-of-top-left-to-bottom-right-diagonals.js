// https://www.codewars.com/kata/5497a3c181dd7291ce000700

function diagonalSum(matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i][i];
  }

  return result;
}
