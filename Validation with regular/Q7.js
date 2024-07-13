function isValidIP(ip) {
    // Regular expression for validating an IPv4 address
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    return ipPattern.test(ip);
}

// Test Data
console.log(isValidIP('192.168.1.1'));  // Output: true
console.log(isValidIP('255.255.255.255'));  // Output: true
console.log(isValidIP('256.256.256.256'));  // Output: false
console.log(isValidIP('192.168.1'));  // Output: false
console.log(isValidIP('abc.def.ghi.jkl'));  // Output: false
