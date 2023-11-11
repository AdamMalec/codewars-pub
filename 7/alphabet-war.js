// https://www.codewars.com/kata/59377c53e66267c8f6000027

function alphabetWar(fight) {
  let leftScore = 0;
  let rightScore = 0;

  const leftStore = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const rightStore = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  for (const letter of fight) {
    if (leftStore[letter]) leftScore += leftStore[letter];
    if (rightStore[letter]) rightScore += rightStore[letter];
  }

  if (leftScore === rightScore) return "Let's fight again!";
  return leftScore > rightScore ? "Left side wins!" : "Right side wins!";
}
