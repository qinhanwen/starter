const toString = Object.prototype.toString;

function isType(type) {
  return function(obj) {
    return toString.call(obj) === `[object ${type}]`;
  };
}

const isObject = isType("Object");
const isString = isType("String");
const isFunction = isType("Function");

export { isObject, isString, isFunction };
