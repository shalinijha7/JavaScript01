//var c = 300
let a =300


if(true){
    let a = 10
    const b =20
    // var c = 30
    // console.log("Inner: ",a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "shalini"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username = "shalini"
    if(username === "shalini"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

function addone(num){
    return num+1
}
addone(6)

const addTwo = function(num){
    return num + 2
}
addTwo(9)