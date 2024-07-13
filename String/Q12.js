function uncamelize(str, delimiter = ' ') {
    return str
        .replace(/([a-z])([A-Z])/g, `$1${delimiter}$2`) // Insert delimiter before each uppercase letter
        .toLowerCase();                                 // Convert the entire string to lowercase
}

// Test Data
console.log(uncamelize('helloWorld'));         //  Output: "hello world"
console.log(uncamelize('helloWorld', '-'));    //  Output: "hello-world"
console.log(uncamelize('helloWorld', '_'));    //  Output: "hello_world"
