function gernateCombination(str){
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1 ; j <= str.length; j++) {
            console.log(str.slice(i , j));
        }
        
    }
}

let str = 'cat'
gernateCombination(str)