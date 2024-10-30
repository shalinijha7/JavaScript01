class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}shalini`
    }
    set password(value){
        this._password = value
    }
}
const shalini = new User("shalini@apple.ai", "abc")
console.log(shalini.email)