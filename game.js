const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');//F

// Funzionalità richieste:
// Genera un numero casuale tra 1 e 100
// L’utente inserisce numeri da terminale (usa readline di Node.js)
// Il programma risponde “Troppo alto”, “Troppo basso” o “Hai indovinato!”
// Conta il numero di tentativi e lo mostra a fine gioco
// Permette di giocare più partite senza riavviare il programm

function getRandomRange(min, max) {
      return min + Math.floor(Math.random() * (max + 1 - min));
    }


// Funzione per generare un numero casuale tra 1 e 100

async function game(){
    const rl = readline.createInterface({ input, output });
    const guessNumber = getRandomRange(1, 100);
    let attempts = 0;
    console.log("Welcome to the Guessing Game!");
    console.log("Try to guess the number between 1 and 100.");
    console.log("Type '-1' to quit the game.");
    
    while(true){
        let input =parseInt(await rl.question("Enter your guess: "));
        if (input === -1) {
            console.log("Thanks for playing! Goodbye!");
            rl.close();
            process.exit(0);
        }
        if(isNaN(input) || input < 1 || input > 100){
            console.log("Invalid input! Please enter a number between 1 and 100.");
            continue;
        }     
        attempts++;
        if(input < guessNumber){
            console.log("Too low!");
        }
        else if(input > guessNumber){
            console.log("Too high!");
        }
        else{
            console.log(`Congratulations! You've guessed the number ${guessNumber} in ${attempts} attempts.`);
            continue;
        }

    }
}

game();
