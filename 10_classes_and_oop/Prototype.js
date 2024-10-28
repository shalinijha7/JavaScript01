let myName = "shalini    "
let myChannel = "chai    "

console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.shalini = function(){
    console.log(`Shalini is present in all objects`)
}

// heroPower.shalini()
// myHeros.shalini()

Array.prototype.heyShalini = function(){
    console.log(`Shalini says hello`)
}

// myHeros.shalini()
// myHeros.heyShalini()
// heroPower.heyShalini()

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {    
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode     "

String.prototype.trueLength = function(){
    // console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"shalini".trueLength()
"peralta".trueLength()
