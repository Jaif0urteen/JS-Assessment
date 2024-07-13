function calculateArea(radius) {
    return Math.PI * radius * radius; // Area = πr²
}

function calculatePerimeter(radius) {
    return 2 * Math.PI * radius; // Perimeter = 2πr
}

// Get radius from user
const radius = parseFloat(prompt("Enter the radius of the circle:"));

// Validate the input
if (isNaN(radius) || radius <= 0) {
    console.log("Please enter a valid positive number for the radius.");
} else {
    const area = calculateArea(radius);
    const perimeter = calculatePerimeter(radius);
    
    console.log(`Area of the circle: ${area.toFixed(2)}`);
    console.log(`Perimeter (Circumference) of the circle: ${perimeter.toFixed(2)}`);
}
