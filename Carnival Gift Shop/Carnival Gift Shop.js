const input = require('sync-input');

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);

let tickets = 0;
let gifts = [
  {index: 1, gift: "Teddy Bear", value: 10},
  {index: 2, gift: "Big Red Ball", value: 5},
  {index: 3, gift: "Huge Bear", value: 50},
  {index: 4, gift: "Candy", value: 8},
  {index: 5, gift: "Stuffed Tiger", value: 15},
  {index: 6, gift: "Stuffed Dragon", value: 30},
  {index: 7, gift: "Skateboard", value: 100},
  {index: 8, gift: "Toy Car", value: 25},
  {index: 9, gift: "Basketball", value: 20},
  {index: 10, gift: "Scary Mask", value: 75 }];

function list(){
  console.log(`Here's the list of gifts:\n`)
  if (gifts.length !== 0) {
    gifts.forEach((gift) => console.log(`${gift.index}- ${gift.gift}, Cost: ${gift.value} tickets`))
    console.log(``)
  } else {
    console.log(`Wow! There are no gifts to buy.\n`);
  }
  options()
}

function options() {
  let select = Number(input(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`))

    if (validNumber(select)) {
      if (select === 1) {
        if (gifts.length === 0) {
          console.log(`Wow! There are no gifts to buy.\n`);
          options()
        } else {
          buyAGift()
        }
      } else {

      }
      if (select === 2) {
        addTickets()
      }
      if (select === 3) {
        checkTickets()
      }
      if (select === 4) {
        list()
      }
      if (select === 5) {
        exit()
      }
    } else {
      console.log(`Please enter a valid number!\n`)
      options()
    }
  }

function buyAGift() {
  let select = Number(input(`Enter the number of the gift you want to get:`));
  if (!isNaN(select)) {
    let selected = gifts.find(gift => gift.index === select)
    if (selected !== undefined) {
      if (tickets - selected.value < 0) {
        console.log(`You don't have enough tickets to buy this gift.`)
      } else {
        tickets -= selected.value
        console.log(`Here you go, one ${selected.gift}!`);
        gifts = gifts.filter((gift) => gift !== selected)
      }
      checkTickets()
    } else {
      console.log(`There is no gift with that number!\n`);
      options()
    }
  } else {
    console.log(`Please enter a valid number!\n`)
    options()
  }
}

function addTickets(){
  let amount = Number(input(`Enter the ticket amount:`));
  if (amount >= 0 && amount <= 1000) {
    tickets += amount;
    checkTickets()
  }
  console.log(`Please enter a valid number between 0 and 1000.\n`);
  options()
}

function checkTickets(){
  console.log(`Total tickets: ${tickets}
  `);
  options()
}

function validNumber(input){
  return input === 1 || input === 2 || input === 3 || input === 4 || input === 5;
}

function exit(){
  console.log(`Have a nice day!`)
}

list()