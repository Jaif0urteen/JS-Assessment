function isHTML(str) {
    // Regular expression to check if the string contains HTML tags
    const htmlPattern = /<[a-z][\s\S]*>/i;
    return htmlPattern.test(str);
}

// Test Data
console.log(isHTML('<p>Hello, <strong>World!</strong></p>'));  // true
console.log(isHTML('Just plain text'));                        // false
console.log(isHTML('<div class="container">'));                // true
console.log(isHTML('<script>alert("Hello");</script>'));        // true
console.log(isHTML('<a href="https://example.com">Link</a>'));  // true
console.log(isHTML('<h1>Title</h1>'));                         // true
