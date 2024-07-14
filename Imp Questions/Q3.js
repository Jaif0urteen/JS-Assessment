// Define an object for your favorite recipe
let recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};

// Log recipe information as specified
console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log("Ingredients:");
recipe.ingredients.forEach(ingredient => {
    console.log(ingredient);
});
