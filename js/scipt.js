let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * choice.length)
    return choice[index] 
}


const getHumanChoice = () => {
    const text = "Rock\nPaper\nScissor";
    let choice = prompt(text).toLowerCase();

    while(!["rock", "paper", "scissor"].includes(choice)){
        choice = prompt("Invalid choice. Please choose from: \nRock\nPaper\nScissor").toLowerCase();
    }
    return choice
    
}

const determineWinner = (computerchoice, humanchoice) =>{
  
    if(computerchoice === humanchoice){
        return "Draw"
    }

    if((humanchoice === "rock" && computerchoice === "scissor") ||
       (humanchoice === "paper" && computerchoice === "rock") ||
       (humanchoice === "scissor" && computerchoice === "paper")){
        return "Human Win"
    } else{
        return "Computer Win"
    }
}

let computerSelection;
let humanSelection;
let roundResult;

let round = 0;
do {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    roundResult = determineWinner(computerSelection, humanSelection);

    if(roundResult === "Computer Win"){
       computerScore++;
    } else if(roundResult === "Human Win"){
        humanScore++;
    }
    round++;

    console.log(`Computer Picks: ${computerSelection}`);
    console.log(`Human Picks: ${humanSelection}`);
    console.log("------------Score---------------")
    console.log(`Computer: ${computerScore}`);
    console.log(`Human: ${humanScore}`);
} while (round < 5);

console.log("---------------\n    The Result");
console.log(`Computer: ${computerScore}\nHuman: ${humanScore}`)
if(computerScore === humanScore){
    console.log("It's a draw")
} else if(computerScore > humanScore){
    console.log("Computer Wins\nBetter Luck Next time")
} else{
    console.log("Congrats\nYou win")
}