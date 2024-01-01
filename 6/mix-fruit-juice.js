// https://www.codewars.com/kata/5905871c00881d0e85000015

function mixFruit(arr) {
  let price = 0;
  const regularFruits = ["banana", "orange", "apple", "lemon", "grapes"];
  const specialFruits = ["avocado", "strawberry", "mango"];

  arr.forEach((fruit) => {
    if (regularFruits.includes(fruit.toLowerCase())) price += 5;
    else if (specialFruits.includes(fruit.toLowerCase())) price += 7;
    else price += 9;
  });

  return Math.round(price / arr.length);
}

mixFruit(['watermelon','pEach']);
