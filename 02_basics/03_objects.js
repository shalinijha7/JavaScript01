//Objects can be declared in two ways: by literals and by constructor

//Singleton
//Object.create [used while declaring object through constructor]

//Object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Shalini",
    "full name":"Shalini Jha",
    [mySym]: "myKey1",
    age: 21,
    email: "shalini@apple.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//Changing values in objects
JsUser.email = "shalini@barclays.com"
// console.log(JsUser.email)

//We can freeze an object so that its value can not be altered afterwards
// Object.freeze(JsUser)

JsUser.email = "shalini@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())