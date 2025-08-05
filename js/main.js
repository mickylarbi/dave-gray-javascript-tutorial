const myNumber = 42

const myFloat = 42.5

const myString = '42'

console.log(myNumber)

console.log(myString === myNumber)

const myNumberFromMyString = Number(myString)

console.log(myNumberFromMyString === myNumber)


console.log(Number(true), Number(false))

console.log(Number.isInteger(myNumber))
console.log(Number.isInteger(myFloat))

console.log(Number.parseFloat(myNumber))
console.log(Number.parseFloat(myString))
console.log(Number.parseFloat("KKK"))


console.log(myNumber.toFixed(2))

console.log(Number.parseFloat(myFloat))
console.log(Number.parseFloat(myString))
console.log(Number.parseFloat("KKK"))

console.log(Number.isNaN("Dave")) // checks if value is NaN and type is number
console.log(isNaN("Dave")) // checks if value is NaN