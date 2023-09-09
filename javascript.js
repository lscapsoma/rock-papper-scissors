

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")

let counter = document.getElementById("counter")
let countertwo = document.getElementById("countertwo")
let counterthree = document.getElementById("counterthree")


let count = 0
let counternumbertwo = 0
let counternumberthree = 0
let x = 0; 
let finalscore = 0;

const container = document.querySelector('#frame');
const content = document.createElement('div');
const playerFinal = document.createElement('div')
const warningMessage = document.createElement('div')

content.classList.add('content');
playerFinal.classList.add('playerFinal')
warningMessage.classList.add('warningMessage')

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

function rockCounter(e) {

  getComputerChoice();
  let ComputerSelection = getComputerChoice();
  if (e.target.id === 'rock' && ComputerSelection === 'scissor'){ 
    count++;
    counter.textContent = ("Since you picked paper and the computer picked rock. You will receive one point --> " + count)
    finalscore++;
    playerFinal.textContent = ("Your current score is " + finalscore)
    container.appendChild(playerFinal)

    }else if (ComputerSelection === 'paper' && e.target.id === 'rock' || ComputerSelection === 'rock' && e.target.id === 'scissor' || ComputerSelection === 'scissor' && e.target.id === 'paper'){ 

    x++;
    content.textContent = ("The computer score is: " + x);
    container.appendChild(content);
  }if (x === 5){ 

    warningMessage.textContent = ("The game is over! stop playing it right now. the computer won!!!(first one to 5 wins)")
    container.appendChild(warningMessage)

  }else if (finalscore === 5 ){ 

    warningMessage.textContent = ("The game is over! stop playing it right now. you won!!!(first one to 5 wins)")
    container.appendChild(warningMessage)
  }
  
}

function paperCounter(e) {

  getComputerChoice();
  let ComputerSelection = getComputerChoice();
  if (e.target.id === 'paper' && ComputerSelection === 'rock'){ 
    counternumbertwo++;
    countertwo.textContent = ("Since you picked paper and the computer picked rock. You will receive one point --> " + counternumbertwo)
    finalscore++;
    playerFinal.textContent = ("Your current score is " + finalscore)
    container.appendChild(playerFinal)

  }else if (ComputerSelection === 'paper' && e.target.id === 'rock' || ComputerSelection === 'rock' && e.target.id === 'scissor' || ComputerSelection === 'scissor' && e.target.id === 'paper'){ 
    x++;
    content.textContent = ("The computer score is: " + x);
    container.appendChild(content);

  } 
  if (x === 5){ 

    warningMessage.textContent = ("The game is over! stop playing it right now. the computer won!!!(first one to 5 wins)")
    container.appendChild(warningMessage)

  }else if (finalscore === 5 ){ 

    warningMessage.textContent = ("The game is over! stop playing it right now. you won!!!(first one to 5 wins)")
    container.appendChild(warningMessage)
  }


}

function scissorCounter(e) {

  getComputerChoice();
  let ComputerSelection = getComputerChoice();
  if (e.target.id === 'scissor' && ComputerSelection === 'paper'){ 
    counternumberthree++;
    counterthree.textContent = ("Since you picked scissor and the computer picked paper. You will receive one point --> " + counternumberthree)
    finalscore++;
    playerFinal.textContent = ("Your current score is: " + finalscore)
    container.appendChild(playerFinal)
    
  }else if (ComputerSelection === 'paper' && e.target.id === 'rock' || ComputerSelection === 'rock' && e.target.id === 'scissor' || ComputerSelection === 'scissor' && e.target.id === 'paper'){ 

    x++;
    content.textContent = ("The computer score is: " + x);
    container.appendChild(content);
  }if (x === 5){ 

    warningMessage.textContent = ("The game is over! stop playing it right now. the computer won!!!(first one to 5 wins)")
    container.appendChild(warningMessage)

  }else if (finalscore === 5 ){ 

    warningMessage.textContent = ("The game is over! stop playing it right now. you won!!!(first one to 5 wins)")
    container.appendChild(warningMessage)
  }

}

rock.addEventListener("click",rockCounter)
paper.addEventListener("click",paperCounter)
scissor.addEventListener("click",scissorCounter)
