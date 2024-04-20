// https://www.codewars.com/kata/534fcca5edb124cfe6000f60

var Singleton = function () {
  if (Singleton.prototype._instance) {
    return Singleton.prototype._instance;
  }
  Singleton.prototype._instance = this;
};
