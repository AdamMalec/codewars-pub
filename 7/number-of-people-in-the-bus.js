// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function getPassengers(arr) {
  let inPass = 0;

  arr.forEach(element => {
    inPass += element[0];
    inPass -= element[1];
  });

  return inPass;
}
