function strip_html_tags(str) {
    return str.replace(/<[^>]*>/g, '').trim();
}

// Test Data
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>')); // Output: "PHP Exercises"
