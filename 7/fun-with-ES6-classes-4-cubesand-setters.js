// https://www.codewars.com/kata/56fcc1ee45040039ab0016da

class Cube {
  constructor(length) {
    this.length = length;
  }

  get volume() {
    return this.length ** 3;
  }

  set volume(value) {
    this.length = Math.cbrt(value);
  }

  get surfaceArea() {
    return 6 * (this.length ** 2);
  }

  set surfaceArea(value) {
    this.length = Math.sqrt(value / 6);
  }
}

var cube = new Cube(1);
