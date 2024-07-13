function isPureJsonObject(value) {
    return value !== null && 
           typeof value === 'object' && 
           !Array.isArray(value) && 
           !(value instanceof Date) && 
           !(value instanceof RegExp);
}

// Test cases
console.log(isPureJsonObject({}));                 // true
console.log(isPureJsonObject({ key: "value" }));   // true
console.log(isPureJsonObject([]));                  // false
console.log(isPureJsonObject(null));                // false
console.log(isPureJsonObject(42));                  // false
console.log(isPureJsonObject("Hello"));             // false
console.log(isPureJsonObject(new Date()));          // false
console.log(isPureJsonObject(new RegExp('a+b')));    // false
