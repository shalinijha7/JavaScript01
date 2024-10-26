const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = new User("shalini", 12, true)
const userTwo = new User("Peralta", 11, true)
console.log(userOne)
console.log(userTwo)