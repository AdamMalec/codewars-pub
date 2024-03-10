// https://www.codewars.com/kata/5366cfe48d004ce19600104b

Object.create = function(prototype, properties) {
  if (typeof prototype !== "object" && properties !== null) {
    throw TypeError("TypeError: prototype not object or null");
  };

  const resultObj = {};
  Object.setPrototypeOf(resultObj, prototype);

  if(typeof properties !== "undefined") {
    Object.defineProperties(resultObj, properties);
  };

  return resultObj;
};
