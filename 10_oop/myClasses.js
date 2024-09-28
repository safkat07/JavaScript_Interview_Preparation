class User {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password
    }


    encryptPassword() {
        return `${this.password}abc`
    }

    chnageUsername() {
        return `${this.username.toUpperCase()}`
    }
}


//behind the scene

function User(username, email, password) {
    this.username = username,
        this.email = email,
        this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.chnageUsername = function () {
    return `${this.username.toUpperCase()}`
}

const safkat = new User('Sharif', "sharif@gmail.com", '123')
const sadli = new User('sadli', "sadli@gmail.com", '123')
console.log(safkat.encryptPassword());
console.log(sadli.chnageUsername());


