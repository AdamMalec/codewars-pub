// https://www.codewars.com/kata/5682e646d5eddc1e21000017

class Marine {
  constructor() {
    this.health = 100;
  }

  accept(visitor) {
  return visitor.visitLight(this);
  }
}

class Marauder {
  constructor() {
    this.health = 125;
  }

  accept(visitor) {
   return visitor.visitArmored(this);
  }
}

class TankBullet {
  visitLight(unit) {
    return unit.health -= 21;
  }

  visitArmored(unit) {
    return unit.health -= 32;
  }
}
