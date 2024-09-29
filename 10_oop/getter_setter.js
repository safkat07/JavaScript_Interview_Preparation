class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value.toUpperCase()
    }
}



const safkat = new User('safkat@gmail.com', 'asfa')
console.log(safkat.password);


