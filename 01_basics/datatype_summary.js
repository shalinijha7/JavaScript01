//Primitive

//7 types:string,number,boolean,null,undefined,symbol,bigInt


//Reference (Non Primitive) inko memory mai directly allocate kiya jaa sakta hai 
//Includes array,objects,functions

//1.)Array
const heros=["shaktiman","naagraj","doga"]

//2.)Object
let myObj={
    name:"shalini",
    age:"24"
}

//3.)Function
//->in js function is treated as a variable

const myFunction=function(){
    console.log("Hello world")
}

//data types 
//https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html

//---------*Stack and heap memory*--------
//stack(primitive) and heap(non-primitive)

let myCity="madrid"

let anotherCity=myCity
anotherCity="amsterdam"

// console.log(myCity)
// console.log(anotherCity)

let userOne={
    email:"shalini@barclays.com",
    upi:"shalini@ybl"
}

let userTwo=userOne
userTwo.email="shalini@apple.com"
console.log(userOne.email)
console.log(userTwo.email)