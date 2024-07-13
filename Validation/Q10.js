function areSameType(value1, value2) {
    return typeof value1 === typeof value2;
}

// Test cases
console.log(areSameType(42, 100));          // true (both are numbers)
console.log(areSameType('hello', 'world')); // true (both are strings)
console.log(areSameType(true, false));      // true (both are booleans)
console.log(areSameType(42, '42'));         // false (number vs string)
console.log(areSameType({}, []));            // false (object vs array)
console.log(areSameType(null, undefined));  // false (null is object, undefined is undefined)

