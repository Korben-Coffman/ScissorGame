let userScore = 0;
let computerScore = 0;
continuePlaying = true;
while (continuePlaying) {
    let options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock', 'Stop'];
    let userChoice = prompt("Rock, Paper, Scissors, Lizard, Spock? Stop to Exit");
    if (userChoice === 'Stop') {
        continuePlaying = false;
        break;
    }
    while (!options.includes(userChoice) && continuePlaying) {
        console.log("Not an option");
        userChoice = prompt("Rock, Paper, Scissors, Lizard, Spock? Stop to Exit");
        if (userChoice === 'Stop') {
            continuePlaying = false;
            break;
        }
    } 

    let computerChoice = options[Math.floor(Math.random() * 5)];

    console.log(`You choose ${userChoice}. Computer choice ${computerChoice}.`)

    if (userChoice === computerChoice) {
        console.log('Tie!');
    } else if (userChoice === options[0]) {
        if (computerChoice === options[2]) {
            console.log("Rock Crushes Scisors, You Win!");
            userScore += 1;
        } else if (computerChoice === options[3]) {
            console.log("Rock Crushes Lizard, You Win!");
            userScore += 1;
        } else {
            console.log("You Lose!")
            computerScore += 1;
        }
        
    } else if (userChoice === options[1]) {
        if (computerChoice === options[0]) {
            console.log("Paper Covers Rock, You Win!");
            userScore += 1;
        } else if (computerChoice === options[4]) {
            console.log("Paper Dispoves Spock, You Win!");
            userScore += 1;
        } else {
            console.log("You Lose!")
            computerScore += 1;
        }

    } else if (userChoice === options[2]) {
        if (computerChoice === options[1]) {
            console.log("Scissors Cuts Paper, You Win!");
            userScore += 1;
        } else if (computerChoice === options[3]) {
            console.log("Scissors Decapitates Lizard, You Win!");
            userScore += 1;
        } else {
            console.log("You Lose!")
            computerScore += 1;
        }

    } else if (userChoice === options[3]) {
        if (computerChoice === options[1]) {
            console.log("Lizard Eats Paper, You Win!");
            userScore += 1;
        } else if (computerChoice === options[4]) {
            console.log("Lizard Poisons Spock, You Win!");
            userScore += 1;
        } else {
            console.log("You Lose!")
            computerScore += 1;
        }

    } else if (userChoice === options[4]) {
        if (computerChoice === options[0]) {
            console.log("Spock Vaporizes Rock, You Win!");
            userScore += 1;
        } else if (computerChoice === options[2]) {
            console.log("Spock Smashes Scissors, You Win!");
            userScore += 1;
        } else {
            console.log("You Lose!")
            computerScore += 1;
        }
    } 
    console.log(`Score is: ${userScore} : ${computerScore}!`);
    

}