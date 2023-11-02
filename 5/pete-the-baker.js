// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  const portionArr = [];

  for (const key in recipe) {
    if (!available.hasOwnProperty(key)) {
      return 0;
    } else {
      const portionCount = Math.floor(available[key] / recipe[key]);
      portionArr.push(portionCount);
    }
  }

  return Math.min(...portionArr);
}
