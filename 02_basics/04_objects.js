// const tinderUser = new Object() ----singleton object----
const tinderUser = {}      //-----non-singleton object-----

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shalini",
            lastname: "jha"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
// const obj3 = { obj1, obj2 }
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2}

// console.log(obj4)

const users = [
    {
        id: 1,
        email: "shalini@gmail.com"
    },
    {
         id: 2,
        email: "shalini1@gmail.com"
    },
    {
         id: 3,
        email: "shalini2@gmail.com"
    }
]

users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

//Course destructuring
const course = {
    coursename: "js in USA",
    price: "999",
    courseInstructor: "shalini"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor)

// {
//     "name": "shalini",
//     "coursename": "js in USA",
//     "price": "free"
// }

[
    {},
    {},
    {}
]