function escape_HTML(html) {
    const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return html.replace(/[<>&"']/g, match => escapeMap[match]);
}

// Test Data
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
//  Output: "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
