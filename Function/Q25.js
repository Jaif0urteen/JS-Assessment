function getFunction (func){
    let functionName = func.toString().match(`/^function\s*([^\s(]+)/`)[1]
    return functionName
    
}

function myFunction() {
    console.log("Hello World");
}

console.log(getFunction(myFunction));