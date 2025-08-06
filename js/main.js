const myArray = []

// add elements to an array
myArray[0] = "Dave"
myArray[1] = 1001
myArray[2] = false

console.log(myArray)

console.log(myArray.length)


// get element by index
console.log(myArray[0])

// last element
console.log(myArray[myArray.length - 1])


// array methods
myArray.push('school')
console.log(myArray)

const lastItem = myArray.pop()
console.log(myArray)
console.log(lastItem)

// adds to the beginning of the array
myArray.unshift(42)
console.log(myArray)

// removes first element of the array
myArray.shift()
console.log(myArray)

// array.splice(<starting index>, <number of elements to remove(optional)>, <insert at index(optional)>)
myArray.splice(1, 0, 42)
console.log(myArray)

// array.slice(<starting index>, <ending index(not included)>)
const newArray = myArray.slice(1)
console.log(myArray)
console.log(newArray)

myArray.reverse()
console.log(myArray)

const joinedArray = myArray.join()
console.log(myArray)
console.log(joinedArray)

const splitArray = joinedArray.split(',')
console.log(splitArray)

const concatArray = splitArray.concat(newArray)
console.log(concatArray)

const spreadArray = [...splitArray, ...newArray]
console.log(spreadArray)


