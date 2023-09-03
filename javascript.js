
function getComputerChoice(){

    let message = Math.floor(Math.random() * 3);
    let computerresult; 
    if (message === 0){ 
        computerresult = "rock";
    }else if (message === 1){
        computerresult = "scissor";
    }else { 
        computerresult = "paper";
    } return computerresult;
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection === "paper" && computerSelection === "rock"){
        
        let finalchoice = ("You win! " + playerSelection + " beats " + computerSelection); 
        return finalchoice;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){ 
        let finalchoice = ("You win! " + playerSelection + " beats " + computerSelection); 
        return finalchoice;

    }else if (playerSelection === "rock" && computerSelection === "scissor"){ 
        let finalchoice = ("You win! " + playerSelection + " beats " + computerSelection); 
        return finalchoice;
    }
    else if (playerSelection === computerSelection){ 

        let drawmessage = ("The computer picked the same as you."); 
        return drawmessage;
    }else{ 
        let secondchoice = ("You lose! " + computerSelection + " beats " + playerSelection); 
        return secondchoice;
    }
    
}


function Game(){

        let y = 0;
        let z = 0;
        let draw = 0;
    for (let x = 0; x < 5; x++){ 
        let filterplayerselection = prompt("pick rock,paper, or scissor.");
        let playerSelection = filterplayerselection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection))

    if (playerSelection === "rock" && computerSelection === "scissor"){
        results = true;
    }else if (playerSelection === "scissor" && computerSelection === "paper"){
        results = true;
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        results = true;
    }else if (playerSelection === computerSelection){  
        results = ("This is a draw, meaning no one scores any points");
    }else{ 
        results = false;
    }
        if(results === true){ 
            y++;
        }else if(results === false){
            z++;
        }else{ 
            draw++;
        }
    }
    console.log("You scored: "+ y + " the computer scored: "+  z + " and draw points(meaning the amount of times you and the computer drawed): " + draw)
   
}

Game();