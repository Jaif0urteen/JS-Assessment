function isValidURL(url) {
    // Regular expression to validate the URL
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w- .?%&=]*)?$/;
    return urlPattern.test(url);
}

// Test Data
console.log(isValidURL('https://www.example.com')); // true
console.log(isValidURL('http://example.com/path/to/page')); // true
console.log(isValidURL('ftp://example.com')); // false
console.log(isValidURL('just-a-string')); // false
