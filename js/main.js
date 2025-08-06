// // can redeclare variable
// var x = 1;
// var x = 2;

// // cannot redeclare but can reassign
// let y = 1;
// y = 2;

// // can neither reassign nor redeclare
// const z = 3;



// global scope
var x = 1;
let y = 2;
const z = 3;


// local scope (inside functions, loops, conditions or just curly brackets)
{
    let y = 3;
    const z = 2;
}

// local scope
function myFunc() {
    let y = 3;
    const z = 2;
}