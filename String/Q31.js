function escape_html(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/'/g, "&apos;")
              .replace(/"/g, "&quot;");
}

// Test Data
console.log(escape_html('PHP & MySQL')); //  Output: "PHP &amp; MySQL"
console.log(escape_html('3 > 2'));       //  Output: "3 &gt; 2"
