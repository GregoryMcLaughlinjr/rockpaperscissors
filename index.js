const selectionButtons = document.querySelectorAll('[data-selection]')
const computerScoreDisplay = document.getElementById('results__score--computer')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊🏻',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋🏻',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌🏻',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addComputerSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)

  if (yourWinner) {
    document.getElementById('yourBattlePosition').style.background = 'radial-gradient(rgb(1, 214, 1), rgb(1, 161, 1), rgb(1, 75, 1))';
  } else if (computerSelection === selection) {
    document.getElementById('yourBattlePosition').style.background = 'radial-gradient(rgb(17, 17, 255), rgb(1, 1, 192), rgb(1, 1, 125)'; 
  } else {
    document.getElementById('yourBattlePosition').style.background = 'radial-gradient(rgb(201, 15, 20), rgb(192, 13, 13), rgb(126, 3, 3))';
  }

  if (computerWinner) {
    document.getElementById('computerBattlePosition').style.background = 'radial-gradient(rgb(1, 214, 1), rgb(1, 161, 1), rgb(1, 75, 1))';
  } else if (computerSelection === selection) {
    document.getElementById('computerBattlePosition').style.background = 'radial-gradient(rgb(17, 17, 255), rgb(1, 1, 192), rgb(1, 1, 125)'; 
  } else {
    document.getElementById('computerBattlePosition').style.background = 'radial-gradient(rgb(201, 15, 20), rgb(192, 13, 13), rgb(126, 3, 3))';
  }


  if (yourWinner) {
    document.getElementById('yourWinDisplay').innerHTML = "WINNER!";
  } else if (computerSelection === selection) {
    document.getElementById('yourWinDisplay').innerHTML = 'TIE!'; 
  } else {
    document.getElementById('yourWinDisplay').innerHTML = 'LOSER!';
  }

  if (computerWinner) {
    document.getElementById('computerWinDisplay').innerHTML = "WINNER!";
  } else if (computerSelection === selection) {
    document.getElementById('computerWinDisplay').innerHTML = 'TIE!';  
  } else {
    document.getElementById('computerWinDisplay').innerHTML = 'LOSER!';
  }

  

  }
  



function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection) {
  document.getElementById('yourSelectionDisplay').innerHTML = (selection.emoji);
    
}

function addComputerSelectionResult(computerSelection) {
  document.getElementById('computerSelectionDisplay').innerHTML = (computerSelection.emoji);
}


function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}


function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}


function rock() {
  let audio = new Audio('/audio/rock.mp3');
audio.play();
}

function paper() {
  let audio = new Audio('/audio/paper.mp3');
audio.play();
}

function scissors() {
  let audio = new Audio('/audio/scissors.mp3');
audio.play();
}



