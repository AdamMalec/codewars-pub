// https://www.codewars.com/kata/56c0ca8c6d88fdb61b000f06

function nextVersion(version){
  const versionArr = version.split('.').map(item => Number(item));
  if (versionArr.length === 1) return `${Number(version) + 1}`;

  for (let i = versionArr.length - 1; i > 0; i--) {
    if (versionArr[i] !== 9 && versionArr[i] !== 10) {
      versionArr[i] += 1;
      break;
    } else {
      versionArr[i - 1]++;
      versionArr[i] = 0;
    }
  }

  return versionArr.join('.');
}
