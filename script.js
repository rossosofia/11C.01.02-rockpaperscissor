start();

function start(){
    console.log('start');
    playerChoice();
}

function playerChoice(){
    // add event lister for each button, addEventLister (click, changeHand)
    document.querySelector("button.paper").addEventListener("click", changeHand);
    // makeRandomComputerChoice();
}

function makeRandomComputerChoice(){
// math.random.something 0-2
// changeHand();
}

function changeHand(){
    console.log('change hand')
    document.querySelector("div#player2").classList.value = "player.paper");

    // document.querySelector("div#player2").classList.add("player.paper");

    // both hands shake 3 seconds
    // player hand changes
    // computer hand changes
    determineWinner();
}

let winner =""

function determineWinner(){
    winner = "computer"
    // compare variables
    showWin();
    // if sentences that sayd "if the result is this, the call this function"
}

function showWin(){

}

function showLose(){
    
}


function showDraw(){
    
}









 
