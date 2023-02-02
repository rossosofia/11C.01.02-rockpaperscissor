start();

function start(){
    console.log('start');
    playerChoice();
}

function playerChoice(){
    // add event lister for each button
    document.querySelector("button.rock").addEventListener("click", shaking);
    document.querySelector("button.scissors").addEventListener("click", shaking);
    document.querySelector("button.paper").addEventListener("click", shaking);
    // makeRandomComputerChoice();
}

function makeRandomComputerChoice(){
// math.random.something 0-2
// changeHand();
}

function shaking(){
    console.log('shaking')
    document.querySelector("div#player1").classList.add("shake");
    document.querySelector("div#player2").classList.add("shake");
    document.querySelector("div#player1").addEventListener("animationend", changeComputerHand);
    document.querySelector("div#player2").addEventListener("animationend", changeUserHand);
}

function changeUserHand(){
    console.log('change user hand');
    document.querySelector("div#player2").classList.remove("shake");

    document.querySelector("div#player2").classList.add("paper");
    determineWinner();
}

function changeComputerHand(){
    console.log('change computer hand');
    document.querySelector("div#player1").classList.remove("shake");
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









 
