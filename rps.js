let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rockBtn')
const paperButton = document.querySelector('.paperBtn')
const scissorsButton = document.querySelector('.scissorsBtn')
const outcomeOfRound = document.querySelector ('.outcome')
const playerScoreCount = document.querySelector ('.playerScoreCount')
const compScoreCount = document.querySelector ('.computerScoreCount')


function computerPlay () {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()* arrOfChoices.length);
    return arrOfChoices[randomNum];

}

const gameResult = (playerScore, compScore) => {
    if (playerScore === 5) {
        outcomeOfRound.replaceChildren()
        const result = document.createElement('h2')
        result.textContent = `Congratulations! You Won ${playerScore}, to ${compScore}`
        outcomeOfRound.appendChild(result)
    }
    
    if (compScore === 5) {
        outcomeOfRound.replaceChildren()
        const result = document.createElement('h2')
        result.textContent = `You Lose ${compScore} to ${playerScore} Better Luck Next Time`
        outcomeOfRound.appendChild(result)
    }
}

function playRound (playerSelection, computerSelection){
    
    console.log ('1', playerSelection, '2', computerSelection)

    if (playerSelection === computerSelection) {
        outcomeOfRound.replaceChildren()
        const p = document.createElement('h2')
        p.textContent = `you tied! you both picked ${playerSelection}`
        outcomeOfRound.appendChild(p)

    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        outcomeOfRound.replaceChildren()
        const p = document.createElement('h2')
        compScore++
        p.textContent = 'you lost! paper beats rock'
        outcomeOfRound.appendChild(p) 
        
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        outcomeOfRound.replaceChildren()
        const p = document.createElement('h2')
        playerScore++
        p.textContent = 'you won! rock beats scissors'
        outcomeOfRound.appendChild(p)

    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        outcomeOfRound.replaceChildren()
        const p = document.createElement('h2')
        compScore++
        p.textContent = 'you lost! rock beats scissors'
        outcomeOfRound.appendChild(p)

    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        outcomeOfRound.replaceChildren()
        const p = document.createElement('h2')
        playerScore++
        p.textContent = 'you won! scissors beats paper'
        outcomeOfRound.appendChild(p)
    
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        outcomeOfRound.replaceChildren()
        const p = document.createElement('h2')
        playerScore++
        p.textContent = 'you won! paper beats rock'
        outcomeOfRound.appendChild(p)

    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        outcomeOfRound.replaceChildren()
        const p = document.createElement('h2')
        compScore++
        p.textContent = 'you lost! scissors beats paper'
        outcomeOfRound.appendChild(p) 
       
    }
}

const updateScore = (playerScore,compScore) => {
    playerScoreCount.textContent = `${playerScore}`
    compScoreCount.textContent = `${compScore}`
}

  
rockButton.addEventListener ('click',() => {
    const computerSelection = computerPlay()
    const playerSelection = 'rock'
    playRound(playerSelection,computerSelection)
    updateScore(playerScore,compScore)
    gameResult(playerScore, compScore)
    
})
paperButton.addEventListener ('click',() => {
    const computerSelection = computerPlay()
    const playerSelection = 'paper'
    playRound(playerSelection,computerSelection)
    updateScore(playerScore,compScore)
    gameResult(playerScore, compScore)
    
})
scissorsButton.addEventListener ('click',() => {
    const computerSelection = computerPlay()
    const playerSelection = 'scissors'
    playRound(playerSelection,computerSelection)
    updateScore(playerScore, compScore)
    gameResult(playerScore, compScore)
    
})

//function game (){
    
  //      const playerSelection = prompt('choose what to throw', 'rock,paper,scissors').toLocaleLowerCase()
    //    const computerSelection = computerPlay();
      //  playRound(playerSelection, computerSelection);

    //if (playerScore > compScore) {
      //   return 'You Won, Congratulations!'

    //} else if (playerScore < compScore) {
      //  return 'You lost, Better Luck Next Time'

    //}else {
      //  return 'You Tied With The Computer!'
    //}
//}


//console.log (game())
