// Function to calculate circumference of a circle
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

// Function to calculate area of a circle
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(`The area is ${area.toFixed(2)}`);
}

// Example usage:
calcCircumference(5); // Calculate circumference for a circle with radius 5
calcArea(5); // Calculate area for a circle with radius 5
