function remove_non_word(str) {
    return str.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Test Data
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL')); //  Output: "PHP  MySQL"
