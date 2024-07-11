const amountToCoins = (amount , coins) => {
    if (amount === 0 ) {
        return("The Amount is Zero");
    } else {
        let result = []
        for (let i = 0; i < coins.length; i++) {
            while (coins[i] <= amount) {
                amount = amount - coins[i]
                result.push(coins[i])
            }
        }
        return result
    }
}

let amount = 0
let coins = [25 , 10 , 5 ,2,1]
console.log(amountToCoins(amount , coins));