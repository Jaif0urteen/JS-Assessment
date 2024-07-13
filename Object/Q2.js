var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Print the object before deletion
console.log("Before deletion:", student);

// Delete the rollno property
delete student.rollno;

// Print the object after deletion
console.log("After deletion:", student);
