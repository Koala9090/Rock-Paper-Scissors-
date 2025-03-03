function getComputerChoice(){
    let randomn= Math.random();
    if (randomn<1/3){
        return "rock";
    }else if(randomn<2/3){
        return "paper";
    }else{
        return "scissors";
    }
}
console.log(getComputerChoice());
function getHumanChoice(){
    let choice= prompt("Enter rock,paper,scissors").toLowerCase();
    if (choice!== "rock" && choice!=="paper" && choice !== "scissors"){
        alert("invalid Choice, Please enter rock,paper, or scissors")
        return getHumanChoice().toLowerCase();
}
return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`you chose ${humanChoice}`)
    console.log(`Computer chose ${computerChoice}`)
    if(humanChoice===computerChoice){
        return "it's a tie";
    } else if (
        (humanChoice === "rock" && computerChoice==="scissors")||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        return "you win!";
    }else{
        return "you Lost! computer won ";
    }
}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));