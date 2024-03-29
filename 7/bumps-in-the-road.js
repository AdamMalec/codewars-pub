// https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x){
  let bumpCounter = 0;

  for (let bump of x) {
    if (bump === "n") {
      bumpCounter++;
    }
  }

  return bumpCounter > 15 ? "Car Dead" : "Woohoo!";
}
