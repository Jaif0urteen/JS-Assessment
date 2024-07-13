function all_properties(obj) {
    // Get all properties (including non-enumerable) of the object
    const properties = Object.getOwnPropertyNames(obj);
    
    // Filter to get only functions (methods)
    const methods = properties.filter(prop => typeof obj[prop] === 'function');
    
    return methods;
}

// Test data
console.log(all_properties(Array));
    