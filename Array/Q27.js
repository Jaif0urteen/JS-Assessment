function num_string_range(start, end, step) {
    const result = [];
    

    let startCode = start.charCodeAt(0);
    let endCode = end.charCodeAt(0);

    for (let code = startCode; code <= endCode; code += step) {
        result.push(String.fromCharCode(code));
    }

    return result;
}

// Test Data
console.log(num_string_range('a', 'z', 2)); 

