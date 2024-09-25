function setUserName(username) {
    //complex DB calss
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password

}

const chai = new createUser('chai', 'chai@mail.com', '123')
console.log(chai);
