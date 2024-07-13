var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

    
function listProperties(obj) {
    return Object.keys(obj).join(', ');
}

// Log the properties to the console
console.log(listProperties(student));
