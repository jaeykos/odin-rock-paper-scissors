class Player{
    score = 0;
}

class Computer extends Player{
    getMove(){
        const selections = ["rock", "paper", "scissors"];
        return selections[Math.floor(Math.random() * selections.length)];
    }
}

class Person extends Player{
    getMove(e){
        const playerSelection = e.srcElement.id;
        return playerSelection;
    }
};

const computer1 = new Computer();
const person1 = new Person();
let roundValue = 0;
let gameOver = false


document.addEventListener("click",(e)=>{

    if (e.target.id == "reset"){ //reset 
        resetRoundAndScores()
        updateDisplay()
        return;
    }else if (e.target.className == "button"){ //play

        if (gameOver ==true){
            resetRoundAndScores();
            gameOver = false;
        }
        //get player and computer selection
        let personMove = person1.getMove(e);
        let computerMove = computer1.getMove();

        playRound(personMove, computerMove);

        //count round, player & computer cores
        roundValue++;

        if (result == "Player Wins"){
            person1.score++;
        }else if (result == "Computer Wins"){
            computer1.score++;
        }
        resultMsg = result + " this round!"
        

        //display result 
        updateDisplay()
        
        if (roundValue == 5){
            if (person1.score >  computer1.score){
                resultMsgL = "Player Won!";
            }else if ( computer1.score > person1.score){
                resultMsg = "Computer Won!";
            }else {
                resultMsg = "Draw!"
            }
            gameOver = true;
            updateDisplay()
        }
        ;}
});

function updateDisplay(){
    round.innerHTML = roundValue;
    playerScore.innerHTML =person1.score;
    computerScore.innerHTML = computer1.score;
    resultMessage.innerHTML = resultMsg;
}

function resetRoundAndScores(){
    roundValue = 0;
    person1.score = 0;
    computer1.score =  0; 
}

function playRound(personMove, computerMove){    
    //compare player vs computer moves 
    if (personMove == "rock") { 

        if (computerMove == "rock"){
            result = "Draw";}
        else if (computerMove == "paper"){
            result = "Computer Wins" ;}
        else {
            result = "Player Wins" ;}
    }
    if (personMove == "paper") { 

        if (computerMove == "paper"){
            result ="Draw";}
        else if (computerMove == "scissors"){
            result= "Computer Wins" ;}
        else {
            result= "Player Wins";}
    }
    if (personMove == "scissors") { 

        if (computerMove == "scissors"){
            result =  "Draw";}
        else if (computerMove == "rock"){
            result= "Computer Wins";}
        else {
            result = "Player Wins";}
    }
    return result;
}