// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
const words = ['python', 'java', 'swift', 'javascript']
const selected = words[Math.floor(Math.random() * words.length)]

let attemptsLeft = 8
let hypens = Array(selected.length).fill('-')
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let guessed = [];
let won = 0;
let lost = 0;

console.log(`H A N G M A N`)

let menu = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)
console.log(' ')

while (menu === 'results') {
    console.log(`You won: ${won} times.
You lost: ${lost} times.`)
    menu = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)
}

do {
    if (menu !== 'exit') {

        while (attemptsLeft > 0 && hypens.join('') !== selected) {


            let userInput = input(`${hypens.join('')}
Input a letter:`)

            while (userInput.length !== 1 || !alphabet.includes(userInput)) {

                if (userInput.length !== 1) {
                    userInput = input(`
${hypens.join('')}
Please, input a single letter.

Input a letter:`)
                }

                if (!alphabet.includes(userInput) && userInput.length === 1) {
                    userInput = input(`
${hypens.join('')}
Please, enter a lowercase letter from the English alphabet.

Input a letter:`)
                }
            }


            if (!hypens.includes(userInput)) {

                if (selected.includes(userInput)) {
                    for (let i = 0; i < selected.length; i++) {
                        if (selected[i] === userInput) {
                            hypens[i] = userInput

                        }
                    }
                } else if (!guessed.includes(userInput)) {
                    console.log(`That letter doesn't appear in the word.`)
                    guessed.push(userInput)
                    attemptsLeft--
                } else {
                    console.log(`You've already guessed this letter.`)
                }
            } else {
                console.log(`You've already guessed this letter.`)
            }
            console.log('')

            if (attemptsLeft === 0) {
                console.log('You lost!')
                lost++
                menu = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)
            }
        }

        if (hypens.join('') === selected) {
            console.log(`You guessed the word ${selected}!
You survived!`)
            won++
            menu = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)
        }
    }

    attemptsLeft = 8
    hypens = Array(selected.length).fill('-')
    guessed = []

    while (menu === 'results') {
        console.log(`You won: ${won} times.
You lost: ${lost} times.`)
        menu = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)
    }

} while (menu === 'play')