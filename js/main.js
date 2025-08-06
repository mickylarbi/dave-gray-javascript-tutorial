const myObj = { name: 'Mike' }
console.log(myObj)

console.log(myObj.name)

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ['eat', 'sleep', 'code'],
    beverage: {
        morning: 'coffee',
        afternoon: 'iced tea'
    },
    action: function () {
        return `time for ${this.beverage.morning}`
    }
}


console.log(anotherObj)
console.log(anotherObj.alive)
console.log(anotherObj.answer)
console.log(anotherObj.hobbies)
console.log(anotherObj.hobbies[0])
console.log(anotherObj.beverage)
console.log(anotherObj.beverage.morning)
console.log(anotherObj.beverage['afternoon'])
console.log(anotherObj.action())

console.log()
console.log()
console.log()


const vehicle = {
    wheels: 4,
    engine: function () {
        return 'vroom'
    }
}

// inheritance
const truck = Object.create(vehicle)
truck.doors = 2
console.log(truck)
console.log(truck.wheels)
console.log(truck.engine())

const car = Object.create(vehicle)
car.doors = 4
car.engine = function () {
    return 'whoosh'
}
console.log(car)
console.log(car.wheels)
console.log(car.engine())

const tesla = Object.create(car)
console.log(tesla)
console.log(tesla.wheels)
console.log(tesla.engine())
tesla.engine = function () {
    return 'shhhh'
}
console.log(tesla.engine())


console.log()
console.log()
console.log()


const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham'
}


console.log(Object.keys(band))
console.log(Object.values(band))


for (let job in band) {
    console.log(`On ${job}, it\'s ${band[job]}!`)
}


// destructuring objexts
const { guitar: myVariable, vocals } = band

console.log(band)
console.log(myVariable)
console.log(vocals)

function sings({ vocals }) { return `${vocals} sings` }
console.log(sings(band))


// deleting
delete band.drums

console.log(band)
