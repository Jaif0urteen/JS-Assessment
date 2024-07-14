// Define an object for your favorite movie
let favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30, // in minutes
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

// Function to print movie information
function printMovieInfo(movie) {
    let starsList = movie.stars.join(', '); // Join stars array into a string
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsList}.`);
}

// Test the function
printMovieInfo(favoriteMovie);
