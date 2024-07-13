function isValidDomain(domain) {
    // Regular expression to match valid domain names
    const domainPattern = /^(?!-)(?!.*--)(?!.*-$)[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;
    return domainPattern.test(domain);
}

// Test Data
console.log(isValidDomain('example.com'));       // true
console.log(isValidDomain('sub.example.com'));    // true
console.log(isValidDomain('-example.com'));      // false
console.log(isValidDomain('example-.com'));      // false
console.log(isValidDomain('example..com'));      // false
console.log(isValidDomain('example'));            // false
console.log(isValidDomain('example.c'));          // false
console.log(isValidDomain('example.123'));        // true
