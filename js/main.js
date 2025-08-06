
const myObj = {
    name: 'Dave',
    hobbies: ['eat', 'sleep', 'code'],
    hello: function () { console.log('hello') }
}

console.log(myObj.name)
console.log(myObj.hobbies)
myObj.hello()
console.log(typeof myObj)

const sendJSON = JSON.stringify(myObj)
console.log(sendJSON)
console.log(typeof sendJSON)


const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)
console.log(typeof receiveJSON)
console.log(receiveJSON.name)



