// first challenge 
// write code that will return a random letter from your name

const myName = 'Michael'
const index = Math.floor(Math.random() * myName.length)
console.log(myName.charAt(index))