const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const { getRandomRange,checkInput } = require('./fun.js');

// Funzionalità richieste:
// Genera un numero casuale tra 1 e 100
// L’utente inserisce numeri da terminale (usa readline di Node.js)
// Il programma risponde “Troppo alto”, “Troppo basso” o “Hai indovinato!”
// Conta il numero di tentativi e lo mostra a fine gioco
// Permette di giocare più partite senza riavviare il programma

async function game(){
    const rl = readline.createInterface({ input, output });
    while(true){
        // Genera un numero casuale tra 1 e 100
        const guessNumber = getRandomRange(1, 100);
        let attempts = 0;
        console.log("Welcome to the Guessing Game!");
        console.log("Try to guess the number between 1 and 100.");
        console.log("Type '0' to quit the game.");
        
        while(true){
            let input = await rl.question('Enter your guess: ');
            input = parseInt(input);
            attempts++;
            let check = checkInput(input,guessNumber);
            switch(check){

                case "Please enter a number between 1 and 100 or enter 0 to quit.":
                    console.log(check);
                    continue;
                case "exit":
                    console.log("Thanks for playing! Goodbye!");
                    rl.close();
                    process.exit(0);
                case "Too low!":
                    console.log(check);
                    break;
                case "Too high!":
                    console.log(check);
                    break;
                case "Correct!":
                    console.log(check+`Congratulations! You've guessed the number ${guessNumber} in ${attempts} attempts.`);
                    continue;
            }
        }
    }
        
}


game();


