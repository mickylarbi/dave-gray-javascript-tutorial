"use strict";

// const makeError = () => {
//     try {
//         const name = 'dave';
//         name = ''
//     } catch (error) {
//         console.log(error)
//         console.warn(error)
//         console.error(error.stack)
//     }
// }

// makeError()


//---------------------------------------------------------



// const makeError = () => {
//     try {
//        throw new customError('something went wrong')
//     } catch (error) {
//         console.log(error)
//         console.warn(error)
//         console.error(error.stack)
//     }
// }

// makeError()


// function customError(message) {
//     this.message = message;
//     this.name = "dave";
//     this.stack = `${this.name} ${this.message}`
// }

//---------------------------------------------------------



// const makeError = () => {
//     try {
//        throw new Error('something went wrong')
//     } catch (error) {
//         console.log(error)
//         console.warn(error)
//         console.error(error.stack)
//     } finally {
//         console.log('do something')
//     }
// }
// makeError()


//---------------------------------------------------------



const makeError = () => {
    let i = 0
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error('Odd number')
            }
            console.log('Even number!')
        } catch (error) {
            console.error(error.stack)
        } finally {
            console.log('...finally')
            i++
        }
    }
}
makeError()