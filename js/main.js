let playGame = confirm('shall we play rock, paper or scissors?')

if (playGame) {
    let playerChoice = prompt('please enter rock, paper or scissors')
    if (playerChoice) {
        let player = playerChoice.trim().toLowerCase()

        if (player === 'rock' || player === 'paper' || player === 'scissors') {
            let computerChoice = Math.floor(Math.random() * 3) + 1
            let computer = computerChoice === 1
                ? 'rock' : computerChoice === 2
                    ? 'paper' : 'scissors'

            let result = `player: ${player}\ncomputer: ${computer}\n\n`;

            result = result + (player === computer ? 'player one:  tie game!' :
                player === 'rock' && computer === 'paper' ? 'computer wins' :
                    player === 'paper' && computer === 'scissors' ? 'computer wins' :
                        player === 'scissors' && computer === 'rock' ? 'computer wins' :
                            'player wins!');

            alert(result)

            let playAgain = confirm('Shall we play again?')
            playAgain ? location.reload() : alert('ok, thanks for playing')

        } else {
            console.log('you did not enter rock, paper or scissors')
        }

    } else {
        alert('i guess you changed your mind. maybe next time')
    }
} else {
    alert('okay maybe next time')
}