// https://www.codewars.com/kata/6319dba6d6e2160015a842ed

function countPhotos(road) {
  let photos = 0;
  let cameraLeft = 0;
  let cameraRight = 0;

  for (let i = 0; i < road.length; i++) {
    if (road[i] === ".") cameraLeft++;
    if (road[i] === "<") photos += cameraLeft;
  }

  for (let i = 0; i < road.length; i++) {
    if (road[i] === ">") cameraRight++;
    if (road[i] === ".") photos += cameraRight;
  }

  return photos;
}
