// 

const rpsArray = ['rock', 'paper', 'scissors']

const initGame = () => {
    const startGame = confirm('shall we play rock, paper or scissors?')
    startGame ? playGame() : alert('okay maybe next time')
}

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice()
        playerChoice = formatPlayerChoice(playerChoice)
        if (playerChoice === '') {
            invalidChoice()
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay()
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }

        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice)

        displayResult(result);

        if (askToPlayAgain()) continue;

        thanksForPlaying();
        break;
    }
}

const getPlayerChoice = () => {
    return prompt('please enter rock, paper or scissors')
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === '') {
        return playerChoice.trim().toLowerCase()
    }
    return false
}

const decidedNotToPlay = () => {
    alert('i guess you changed your mind. maybe next time')
}

const evaluatePlayerChoice = (playerChoice) => {
    if (rpsArray.includes(playerChoice)) {
        return playerChoice
    }
    return false
}

const invalidChoice = () => {
    alert('you did not enter rock, paper or scissors')
}

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3)
    return rpsArray[computerChoice]
}

const determineWinner = (player, computer) => {
    let result = `player: ${player}\ncomputer: ${computer}\n\n`;

    if (computer === player) {
        result += 'tie game!'
    } else if (rpsArray.indexOf(player) === 2 && rpsArray.indexOf(computer) === 0) {
        result += 'computer wins'
    } else if (rpsArray.indexOf(computer) === 2 && rpsArray.indexOf(player) === 0) {
        result += 'player wins'
    } else if (rpsArray.indexOf(player) > rpsArray.indexOf(computer)) {
        result += 'player wins'
    } else {
        result += 'computer wins'
    }

    return result
}

const displayResult = (result) => {
    alert(result)
}

const askToPlayAgain = () => {
    return confirm('Play again?')
}

const thanksForPlaying = () => {
    alert('ok thanks for playing');
}

initGame()