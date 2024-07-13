function sortByTitle(library) {
    return library.sort((a, b) => {
        if (a.title < b.title) return -1; // a comes before b
        if (a.title > b.title) return 1;  // a comes after b
        return 0;                          // a and b are equal
    });
}

// Sample object
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

// Sort the library by title
var sortedLibrary = sortByTitle(library);
console.log(sortedLibrary);
