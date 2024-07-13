class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    volume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Example usage:
const myCylinder = new Cylinder(5, 10);
console.log(`The volume of the cylinder is: ${myCylinder.volume()} cubic units`);
