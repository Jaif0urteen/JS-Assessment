function rotateString(str) {
return (str.slice(-1) + str.slice(0 , -1));
}
let str = 'w3resource'
function updateString () {
    str = rotateString(str)
    console.log(str);
}

setInterval( () => updateString(str) , 500)