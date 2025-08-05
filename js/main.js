let player = 'scissors'
let computer = 'rock'

switch (player) {
    case computer:
        console.log('tie game!');
        break;
    case 'rock':
        if (computer === 'paper') {
            console.log('computer wins')
        } else {
            console.log('you win!')
        }
        break;
    case 'paper':
        if (computer === 'scissors') {
            console.log('computer wins')
        } else {
            console.log('you win!')
        }
        break;

    default:
        if (computer === 'rock') {
            console.log('computer wins')
        } else {
            console.log('you win!')
        }
        break;
}