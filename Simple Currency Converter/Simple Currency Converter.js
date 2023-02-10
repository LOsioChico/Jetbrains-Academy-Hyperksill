const input = require('sync-input');
let values = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`)
let menu = Number(input(`What do you want to do?
1-Convert currencies 2-Exit program
`))
if (!(menu === 1 || menu === 2)) {
    console.log('Unknown input')
    menu = Number(input(`What do you want to do?
1-Convert currencies 2-Exit program
`))}
if (menu === 1) {
    let from = input(`What do you want to convert?
From:`).toUpperCase();
    if (!(from in values)) {
        while (!(from in values)) {
            console.log('Unknown currency')
            from = input(`What do you want to convert?
From:`).toUpperCase();
        }
    }
    let to = input(`To:`).toUpperCase();
    if (!(to in values)) {
        console.log('Unknown currency')
    }
    let amount = Number(input(`Amount:`));
    if (amount < 1) {
        console.log('The amount cannot be less than 1')
        amount = Number(input(`Amount:`))
    } else if (isNaN(amount)) {
        console.log('The amount has to be a number')
        amount = Number(input(`Amount:`));
    } else {
        console.log(`Result: ${amount} ${from} equals ${(amount / values[from] * values[to]).toFixed(4)} ${to}`)
    }
}
console.log('Have a nice day!')
