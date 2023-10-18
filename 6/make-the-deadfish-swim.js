// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function swim(str) {
    const strArr = str.split('');
    const resultArr = [];
    let initValue = 0;

    for (let i = 0; i < strArr.length; i++) {
      const item = strArr[i];

      if (item === 'i') initValue++;
      if (item === 'd') initValue--;
      if (item === 's') initValue *= initValue;
      if (item === 'o') resultArr.push(initValue);
    }

    return resultArr;
}
