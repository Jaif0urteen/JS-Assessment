const gernateRandomString = (length , charList) => {
let result = ""
for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charList.length)
    result = result + charList[randomIndex]
}
return result
}
let length = 10
let charList = "lsdjfhskjdfhaslkfhdilawhsdc1232432432rSADHASFJGDSFUKSDFSHDLFKASHFDKLA234234"
console.log(gernateRandomString(length , charList));