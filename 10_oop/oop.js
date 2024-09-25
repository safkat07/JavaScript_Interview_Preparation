const user = {
    username: "sadli",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        console.log('got user details', this.username);
    }
}

// console.log(user['username']);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn) {
    this.username = username,
        this.loginCount = loginCount,
        this.isLoggedIn = isLoggedIn
}

const userOne = new User('sadli', 12, true)
const usertwo = new User('liker', 12, true)
console.log(userOne);
console.log(usertwo);
