let resultOptions = ["Rock", "Paper", "Scissors"];


let computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    let results = resultOptions[randomNumber];
    return results;
}

console.log(computerPlay());

let capitalize = (n) => {
    let getLowerCase = n.toLowerCase();
    let firstLetter = getLowerCase[0];
    let get1stCapital = firstLetter.toUpperCase();
    let result = getLowerCase.replace(getLowerCase[0], get1stCapital);
    return result;
}

document.getElementById("h").textContent = "Choose One";

function playRound(playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();
    playerInput = capitalize(playerInput);




    if (playerInput == "Rock" && computerSelection == "Scissors") {
        document.getElementById("h").textContent = "Rock beats Scissors, You Win This Round 👍"
        return "Congrats You Win! Rock beats Scissors";

    } else if (playerInput == "Paper" && computerSelection == "Rock") {
        document.getElementById("h").textContent = "Paper beats Rock, You Win This Round 👍"
        return "Congrats You Win! Paper beats Rock";

    } else if (playerInput == "Scissors" && computerSelection == "Paper") {
        document.getElementById("h").textContent = "Scissors beats Paper, You Win This Round 👍"
        return "Congrats You Win! Scissors beats Paper";


    } else if (playerInput == "Paper" && computerSelection == "Scissors") {
        document.getElementById("h").textContent = "Scissors beats, Paper You Lose This Round👎"

        return "You Lose! Scissors beats Paper";

    } else if (playerInput == "Scissors" && computerSelection == "Rock") {
        document.getElementById("h").textContent = "Rock beats Scissors, You Lose This Round👎"
        return "You Lose! Rock beats Scissors";

    } else if (playerInput == "Rock" && computerSelection == "Paper") {
        document.getElementById("h").textContent = "Paper beats Rock, You Lose This Round👎"
        return "You Lose! Paper beats Rock";

    } else {
        document.getElementById("h").textContent = "🥵It's A Draw,🥵 Try Again."
        return "No selection";
    }
}

//const playerSelection = "rOck";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

//let computerWins = 0;
//let playerWins = 0;

let Paper = document.querySelector('.Paper');
Paper.addEventListener('click', function() {
    return game('Paper');
});

let Rock = document.querySelector('.Rock');
Rock.addEventListener('click', function() {
    return game('Rock');
});

let Scissors = document.querySelector('.Scissors');
Scissors.addEventListener('click', function() {
    return game('Scissors');
});

let btn = document.querySelector('.button');
btn.addEventListener('click', function() {
    return game(' ');
});


let userResults = 0;
let computerResults = 0;



function game(a) {
    let computer = 0;
    let player = 0;
    let winner = '';
    let progress = 'GAME ON !';

    document.getElementById('pg').innerHTML = winner;

    for (let i = 0; i < 1; i++) {

        const playerSelection = a;
        let computerSelection = computerPlay();
        let results = playRound(playerSelection, computerSelection);

        document.getElementById('P').innerHTML = playerSelection;
        document.getElementById('C').innerHTML = computerSelection;

        if (results == "Congrats You Win! Rock beats Scissors") {
            player += 1;
        } else if (results == "Congrats You Win! Paper beats Rock") {
            player += 1;
        } else if (results == "Congrats You Win! Scissors beats Paper") {
            player += 1;
        } else if (results == "You Lose! Scissors beats Paper") {
            computer += 1;
        } else if (results == "You Lose! Rock beats Scissors") {
            computer += 1;
        } else if (results == "You Lose! Paper beats Rock") {
            computer += 1;
        } else if (results == "no selection") {
            computer = 0;
            player = 0;
            computerResults += 0;
            userResults += 0;
            progress = '  '
            document.getElementById("h").textContent = "";
        }

        if (computer == 5 && player == 5) {
            winner += "It's a DRAW";
            progress += '';
            progress = 'GAME OVER!  ';
        }

        if (computer >= 1) {

            computerResults += 1;

        } else if (player >= 1) {

            userResults += 1;
        }


        console.log(userResults);
        console.log(computerResults);
        document.getElementById('player').innerHTML = userResults;
        document.getElementById('computer').innerHTML = computerResults;

        if (computerResults == 5) {
            winner += ' ☹️ You LOSE!';
            progress += '';
            progress = 'GAME OVER!  ';


        } else if (userResults == 5) {
            winner += '🕺🏽 You WIN! 🍾 🥂';
            progress += '';
            progress = 'GAME OVER!  ';


        }

        if (userResults == 5 || computerResults == 5) {
            document.getElementById('B').innerHTML = progress;
        }


        if (userResults < 5 && computerResults < 5) {
            document.getElementById('pg').innerHTML = progress;
        }



        if (computer > 5) {
            computer = 0;
        } else if (player > 5) {
            player = 0;
        }

        if (computerResults == 5 || userResults == 5) {

            computerResults = 0;
            userResults = 0;

        }


        document.getElementById('A').innerHTML = winner;

        //computerWins = computer;
        //playerWins = player;

        //let l1 = 'computer wins :' + computer;
        //let l2 = 'player wins :' + player;
        let wins = [computer, player, winner];


        //console.log(wins);
        return wins;

    }


}