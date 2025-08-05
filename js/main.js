// prompt dialog
let myName = prompt('please enter your name');
if (myName) {
    console.log(myName.length)
    console.log(myName.trim().length)
    console.log(myName.trim())
}
else {
    console.log('you did not enter your name')
}