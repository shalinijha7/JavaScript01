//if
const isUserLoggedIn = true
const temperature = 41

// if(temperature === 40){
//     console.log("less than 50")
// }else{
//     console.log("temperature is greater than 50")
// }


// <, >, <=, >=, ==, !=, ===, !==

// //scope
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// //this code will give error because here the power variable is only limited to upper condition scope
// console.log(`User power: ${power}`)

// const balance = 1000

//Implicit scope (ye ek hi line mai execute hota hai)
// if(balance > 500) console.log("test")

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses")
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in")
}