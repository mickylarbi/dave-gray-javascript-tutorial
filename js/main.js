let playGame = confirm('shall we play rock, paper or scissors?')

if (playGame) {
    let playerChoice = prompt('please enter rock, paper or scissors')
    if (playerChoice) {
        let player = playerChoice.trim().toLowerCase()
        const rpsArray = ['rock', 'paper', 'scissors']

        if (rpsArray.includes(player)) {
            let computerChoice = Math.floor(Math.random() * 3)
            let computer = rpsArray[computerChoice]

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

            alert(result)

            let playAgain = confirm('Shall we play again?')
            playAgain ? location.reload() : alert('ok, thanks for playing')

        } else {
            alert('you did not enter rock, paper or scissors')
        }

    } else {
        alert('i guess you changed your mind. maybe next time')
    }
} else {
    alert('okay maybe next time')
}