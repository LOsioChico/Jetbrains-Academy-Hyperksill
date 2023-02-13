// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let water = 400
let milk = 540
let coffee = 120
let disposableCups = 9
let money = 550
let taken = 0;

function available(){
    console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffee} g of coffee beans
${disposableCups} disposable cups
${money} of money\n`)
    menu()
}

function menu(){
    let option = input(`Write action (buy, fill, take, remaining, exit):\n`)
    console.log('')
    if (option === 'buy'){
        buy()
    }
    if (option === 'fill'){
        fill()
    }
    if (option === 'take'){
        taken += money
        money = 0;
        console.log(`I gave you $${taken}\n`)
        menu()
    }
    if (option === 'remaining'){
        available()
    }
    console.log('Please, select a valid option')
    menu()
}

function buy(){
    let buySelect = Number(input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n`))
    if (buySelect === 1 && checkEnough(buySelect) > 0){
        console.log('I have enough resources, making you a coffee!\n')
        water -= 250
        coffee -= 16
        money += 4
        disposableCups -= 1
    }
    if (buySelect === 2 && checkEnough(buySelect) > 0){
        console.log('I have enough resources, making you a coffee!\n')
        water -= 350
        milk -= 75
        coffee -= 20
        money += 7
        disposableCups -= 1
    }
    if (buySelect === 3 && checkEnough(buySelect) > 0){
        console.log('I have enough resources, making you a coffee!\n')
        water -= 200
        milk -= 100
        coffee -= 12
        money += 6
        disposableCups -= 1
    }
    menu()
}

function fill(){
    water += Number(input(`Write how many ml of water you want to add: :\n`));
    milk += Number(input(`Write how many ml of milk you want to add: \n`));
    coffee += Number(input(`Write how many grams of coffee beans you want to add:\n`));
    disposableCups += Number(input(`Write how many disposable cups you want to add:\n`));
    console.log('')
    menu()
}

function checkEnough(buySelect){
    let waterNeeded;
    let coffeeNeeded;
    let milkNeeded;
    if (buySelect === 1){
        waterNeeded = 250
        coffeeNeeded = 16
        check(1,waterNeeded,coffeeNeeded)
        return Math.floor(Math.min(water / waterNeeded, coffee / coffeeNeeded))
    }
    if (buySelect === 2){
        waterNeeded = 350
        coffeeNeeded = 75
        milkNeeded = 20
        check(2,waterNeeded,coffeeNeeded,milkNeeded)
        return Math.floor(Math.min(water / waterNeeded, coffee / coffeeNeeded, milk / milkNeeded))

    }
    if (buySelect === 3){
        waterNeeded = 200
        coffeeNeeded = 100
        milkNeeded = 12
        check(3,waterNeeded,coffeeNeeded,milkNeeded)
        return Math.floor(Math.min(water / waterNeeded, coffee / coffeeNeeded, milk, milkNeeded))
    }
    function check(buySelect, waterNeeded, coffeeNeeded, milkNeeded){
            if (water / waterNeeded < 1) {
                console.log('Sorry, not enough water!\n')
            }
            if (Math.floor(Math.min(coffee / coffeeNeeded)) < 1) {
                console.log('Sorry, not enough coffee!\n')
            }
        if (buySelect !== 1) {
            if (Math.floor(Math.min(milk / milkNeeded)) < 1) {
                console.log('Sorry, not enough milk!\n')
            }
        }
    }
}

menu()