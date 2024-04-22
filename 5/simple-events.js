// https://www.codewars.com/kata/52d3b68215be7c2d5300022f

class Event {
  constructor() {
    this.subscribers = new Set()
  }

  subscribe(fn) {
    this.subscribers.add(fn)
  }

  unsubscribe(fn) {
    this.subscribers.delete(fn)
  }

  emit() {
    this.subscribers.forEach(fn => fn(...arguments))
  }
}
