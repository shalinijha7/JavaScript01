const user = {
    username: "shalini",
    userId: 1,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

//----------this can't be used in function----------matlab it will not give any result------

// function chai(){
//     let username = "shalini"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "shalini"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "shalini"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "shalini"})
console.log(addTwo(3,4))
