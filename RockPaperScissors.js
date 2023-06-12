document.addEventListener("click", buttonClicked);

function buttonClicked(e){
    if (e.srcElement.id == ""){
        return;
    }
    playRound(e);    
}

function playRound(e) {

    //get player and computer selection
    let playerSelectionLowered = getPlayerSelection(e);
    let computerSelection = getComputerChoice();

    const resultMessage = document.querySelector("#result");
    const round = document.querySelector("#round");
    const playerScore =document.querySelector("#playerScore");
    const computerScore =document.querySelector("#computerScore");  

    //reset 
    if (e.srcElement.id == "reset"){
        
        resultMessage.innerHTML = "";
        round.innerHTML = "0";
        playerScore.innerHTML = "0";
        computerScore.innerHTML = "0";
        return;
    }

    //read existing scores 
    roundValue  =  parseInt(round.innerHTML);
    playerScoreValue =  parseInt(playerScore.innerHTML);
    computerScoreValue =  parseInt(computerScore.innerHTML);

    //restart rounds from 1 if round 5 done
    if (roundValue ==5){
        roundValue = 0;
        playerScoreValue = 0;
        computerScoreValue = 0; 
        resultMessage.innerHTML = "";
    }

    //compare player vs computer moves 
    if (playerSelectionLowered == "rock") { 

        if (computerSelection == "Rock"){
            result = "Draw";}
        else if (computerSelection == "Paper"){
            result = "Computer Wins" ;}
        else {
            result = "Player Wins" ;}
    }
    if (playerSelectionLowered == "paper") { 

        if (computerSelection == "Paper"){
            result ="Draw";}
        else if (computerSelection == "Scissors"){
            result= "Computer Wins" ;}
        else {
            result= "Player Wins";}
    }
    if (playerSelectionLowered == "scissors") { 

        if (computerSelection == "scissors"){
            result =  "Draw";}
        else if (computerSelection == "Rock"){
            result= "Computer Wins";}
        else {
            result = "Player Wins";}
    }

    //count round, player & computer cores
    roundValue++;
    if (result == "Player Wins"){
        playerScoreValue++;
    }else if (result == "Computer Wins"){
        computerScoreValue++;
    }
  
    //display result 
    round.innerHTML = roundValue;
    playerScore.innerHTML =playerScoreValue;
    computerScore.innerHTML = computerScoreValue;

    if (roundValue ==5){
        if (playerScoreValue > computerScoreValue){
            resultMessage.innerHTML = "Player Won!";
        }else if (computerScoreValue > playerScoreValue){
            resultMessage.innerHTML = "Computer Won!";
        }else {
            resultMessage.innerHTML = "Draw!"
        }
    }
}

function getPlayerSelection(e){
    const playerSelection = e.srcElement.id;
    return playerSelection;
}

function getComputerChoice() {
    const selections = ["Rock", "Paper", "Scissors"];
    return selections[Math.floor(Math.random() * selections.length)];
  }
   