class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`user name is: ${this.username}`);
    }
    static createID() {
        return `123`
    }
}

const sadli = new User('sadli')

class Teacher extends User {
    constructor(username, email,) {
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher('15 pro max', 'i@phone.com')
Iphone.logMe()
console.log(Iphone.createID());
