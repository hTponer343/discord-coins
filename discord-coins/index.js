
const coins = require("./database.json")

module.exports = {
    Balance: function(str) {
        if (!str) {
            throw new TypeError("No message.author.id found!")
        }
        if(!coins[str]){
            coins[str] = {
                coins: 0
            }
         }
        
         let uCoins = coins[str].coins
         return uCoins;
    },
}
