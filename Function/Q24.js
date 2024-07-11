const highOrderFunction = (callback) => {
    console.log("High Order Function Those Function that take another function as a parametr.");
    callback()
}

const callback = () => {
    console.log("Callback Function those function that pass as a argument to another(HOF) Function.");
}

highOrderFunction(callback)