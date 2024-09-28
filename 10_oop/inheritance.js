class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS: ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username),
            this.email = email,
            this.password = password
    }

    addCourse() {
        console.log(`A new Course was added by ${this.username}`);
    }
}

const teacher = new Teacher('sir', 'sir@gmail.com', '12321')
teacher.addCourse()

const teacherTwo = new User('teacher Two')
teacherTwo.logMe()

console.log(teacher instanceof Teacher);
console.log(teacher instanceof User );
