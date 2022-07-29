let playerScore = 0
let compScore = 0

function computerPlay () {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()* arrOfChoices.length);
    return arrOfChoices[randomNum];

}

function playRound (playerSelection, computerSelection){

    console.log ('1', playerSelection, '2', computerSelection)

    if (playerSelection === computerSelection) {
        return `you tied! you both picked ${playerSelection}`

    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        compScore++
        return 'you lost! paper beats rock' 

    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++
        return 'you won! rock beats scissors'
      

    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        compScore++
        return 'you lost! rock beats scissors'
        

    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++
        return 'you won! scissors beats paper'
        
    
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++
        return 'you won! paper beats rock'
        

    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        compScore++
        return 'you lost! scissors beats paper'
       
    }
}

  

function game (){
    for (let i = 0; i <5; i++) {
        const playerSelection = prompt('choose what to throw', 'rock,paper,scissors').toLocaleLowerCase()
        const computerSelection = computerPlay();
        console.log('1',playRound(playerSelection, computerSelection));  
    }

    if (playerScore > compScore) {
         return 'You Won, Congratulations!'

    } else if (playerScore < compScore) {
        return 'You lost, Better Luck Next Time'

    }else {
        return 'You Tied With The Computer!'
    }
}


console.log (game())
