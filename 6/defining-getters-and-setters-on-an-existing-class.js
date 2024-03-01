// https://www.codewars.com/kata/55bcf04de45497c54a0000d0

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

Object.setPrototypeOf(
  Person,
  Object.defineProperty(Person.prototype, 'name', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(value) {
      [this.firstName, this.lastName] = value.split(" ");
    }
  })
)
