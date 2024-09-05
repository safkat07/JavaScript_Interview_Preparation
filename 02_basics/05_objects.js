
const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// const { courseName, courseInstructor: instuctor } = course
// console.log(instuctor);

let students = [
    {name: "Piyush", rollNumber: 31, marks: 80},
    {name: "jeny", rollNumber: 15, marks: 69},
    {name: "Kushal", rollNumber: 16, marks: 35},
    {name: "Dilpret", rollNumber: 7, marks: 55},
]

// const mark = students.filter((student) => student.marks > 60 && student.rollNumber > 15)
// console.log(mark.length);
// const sum = students.reduce((acc, cur) => acc + cur.marks, 0)
// console.log(sum);

// const studentName = students.filter((stu) => stu.marks > 60 ).map(stu => stu.name)
// console.log(studentName);

const totalMarks = students.map((stu) => {
    if (stu.marks < 60) {
        stu.marks += 20
    }
    return stu
}).filter(stu => stu.marks > 60).reduce((acc, curr) => acc + curr.marks, 0)

console.log(totalMarks);

