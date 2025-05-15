function getRandomRange(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
}


function checkInput(input,guessNumber){
    if(isNaN(input) || input < 0 || input > 100 ||!Number.isInteger (input)){
        return "Please enter a integer number between 1 and 100 or enter 0 to quit.";
    }
    if(input === 0){
        return "exit";
    }
    if(input < guessNumber){
        return "Too low!";
    }
    else if(input > guessNumber){
        return "Too high!";
    }
    else{
        return "Correct!";
    }   
}


module.exports = { getRandomRange, checkInput };


