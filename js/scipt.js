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


do {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    roundResult = determineWinner(computerSelection, humanSelection);

    console.log(`Computer Picks: ${computerSelection}`);
    console.log(`Human Picks: ${humanSelection}`);

    if(roundResult === "Draw"){
        console.log("Its a draw")
    } else if(roundResult === "Computer Win"){
        console.log("Computer Win")
    }
} while (roundResult == "Draw" || roundResult === "Computer win");

console.log("-------------------\n   Game Over")


console.log(`Computer Picks: ${computerSelection}\nHuman Picks: ${humanSelection}`)
console.log("Humans Wins")