let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function() {
    const choice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * choice.length)
    return choice[index] 
}


let getHumanChoice = function() {
    const text = "Rock\nPaper\nScissor";
    let choice = prompt(text).toLowerCase();
    // If the choice is not rock paper scisspr the wwhile loop execute
    while(!["rock", "paper", "scissor"].includes(choice)){
        choice = prompt("Invalid choice. Please choose from: \nRock\nPaper\nScissor").toLowerCase();
    }
    return choice
    
}

let determineWinner = function(computerchoice, humanchoice){
  
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
let gameStart = function(){
    let computerSelection;
    let humanSelection;
    let roundResult;

    let round = 0;
    // do while loop do  is to check if the round  
    do {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        roundResult = determineWinner(computerSelection, humanSelection);

        if(roundResult === "Computer Win"){
        computerScore++;
        console.log(`Computer Wins Round ${round + 1}`)
        } else if(roundResult === "Human Win"){
            humanScore++;
            console.log(`Human Wins Round ${round + 1}`)
        } else{
            console.log(`Tie Round ${round + 1}`)
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
}

gameStart()
