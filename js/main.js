
function logSomethingToConsole() {
    console.log('something')
}

function logToConsole(something) {
    console.log(something)
}

function addNumbers(num1, num2) {
    return num1 + num2
}

const getUsernameFromEmail = function (email) {
    return email.slice(0, email.indexOf('@'));
}

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

logSomethingToConsole()
logToConsole('logged to console')

console.log(addNumbers(2, 3))
console.log(getUsernameFromEmail('kwame@dev.start'))
console.log(toProperCase('dAvE'))