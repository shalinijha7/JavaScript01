const name="shalini"
const repoCount=50

//console.log(name + repoCount + " value") --> outdated way for concatenation

//Backticks use / string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('shalini-jha')
// console.log(gameName[0])
// console.log(gameName.__proto__)

console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))

// console.log(gameName.indexOf('a'))

//substring
const newString=gameName.substring(0,4)
console.log(newString)

//slice
const anotherString = gameName.slice(-11,4)
console.log(anotherString)

//trim
const newStringOne = " shalini "
console.log(newStringOne)
console.log(newStringOne.trim())

//url maipulations
const url= "https://shalini.com/shalini%20jha"
console.log(url.replace('%20','-'))
console.log(url.includes('shalini'))
console.log(url.includes('avni'))

//split
console.log(gameName.split("-"))
