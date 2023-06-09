function getComputerChoice() {
    
    const selections = ["Rock", "Paper", "Scissors"];
    return selections[Math.floor(Math.random() * selections.length)];
  }
   
function playRound(playerSelection, computerSelection) {

    let playerSelectionLowered = playerSelection.toLowerCase();

    if (playerSelectionLowered == "rock") { 

        if (computerSelection == "Rock"){
            return "Draw";}
        else if (computerSelection == "Paper"){
            return "Computer Wins";}
        else {
            return "Player Wins";}
    }
    if (playerSelectionLowered == "paper") { 

        if (computerSelection == "Paper"){
            return "Draw";}
        else if (computerSelection == "Scissors"){
            return "Computer Wins";}
        else {
            return "Player Wins";}
    }
    if (playerSelectionLowered == "scissors") { 

        if (computerSelection == "scissors"){
            return "Draw";}
        else if (computerSelection == "Rock"){
            return "Computer Wins";}
        else {
            return "Player Wins";}
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round <5; round++){

        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
                
        let roundResult = playRound(playerSelection, computerSelection)

        if (roundResult == "Player Wins") {playerScore++}
        if (roundResult == "Computer Wins") {computerScore++}
        console.log(roundResult, " Player:", playerScore, " Computer: ",computerScore );
    }
}
   
game();