// class Pizza {

//     constructor(pizzaSize) {
//         this.size = pizzaSize
//         this._crust = 'original'
//     }

//     get pizzaCrust() {
//         return this._crust
//     }

//     set pizzaCrust(value) {
//         this._crust = value
//     }

//     bake() {
//         console.log(`Making a ${this.size} ${this.type} ${this._crust} crust pizza`)
//     }
// }

// const myPizza = new Pizza('pepperoni', 'small')
// myPizza.bake()


// console.log(myPizza.type)

// myPizza.type = 'supreme'
// console.log(myPizza.type)

// myPizza.pizzaCrust = 'thin'
// console.log(myPizza.type)


// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize) {
//         super(pizzaSize);
//         this.type = 'pepperoni'
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//     }
// }

// const mySpecialty = new SpecialtyPizza('medium')
// mySpecialty.slice()


// const pizzaFactory = (pizzaSize) => {
//     const crust = 'original'
//     const size = pizzaSize

//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} pizza`)
//     }
// }

// const anotherPizza = pizzaFactory('small')
// anotherPizza.bake()




class Pizza {
    crust = 'original'
    #sauce = 'traditional'
    #size

    constructor(pizzaSize) {
        this.#size = pizzaSize
    }

    getCrust() {
        return this.crust
    }

    setCrust(value) {
        this.crust = value
    }
    hereYouGo() {
        console.log(`Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
    }
}

const myPizza = new Pizza('small')
myPizza.hereYouGo()