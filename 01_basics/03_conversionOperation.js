let score="35abc"

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)

//console.log(valueInNumber) => for score="35" output will be number only

//console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true ; 0 =>false
// "" => false
// "shalini" => true

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber)

//-----------------------------***---------------------***----------

let value = 3
let negValue = -value
//console.log(negValue)

let str1 = "hello"
let str2 = " shalini"

let str3 = str1+ str2
//console.log(str3)

//console.log("1" + 2) //12
//console.log(1 + "2") //12
//console.log("1" + 2 + 2) //122
//console.log(1+2+"2") //32

//console.log(true)//true
//console.log(+true)//1
//console.log(true+) //gives error
//console.log(+"") //0

//Increment operator

let gameCounter=100
++gameCounter
console.log(gameCounter)