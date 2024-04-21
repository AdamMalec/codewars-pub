// https://www.codewars.com/kata/5682e72eb7354b2f39000021

class SiegeState {
  constructor() {
    this.move = false;
    this.damage = 20;
  }
}

class TankState {
  constructor() {
    this.move = true;
    this.damage = 5;
  }
}

class Tank {
  constructor() {
    this.state = new TankState();
  }

  get move() {
    return this.state.move;
  }

  get damage() {
    return this.state.damage;
  }
}
