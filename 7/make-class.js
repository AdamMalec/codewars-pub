// https://www.codewars.com/kata/5d774cfde98179002a7cb3c8

function makeClass(...keys) {
  return class {
    constructor(...values) {
      keys.forEach((item, i) => this[item] = values[i])
    }
  }
}
