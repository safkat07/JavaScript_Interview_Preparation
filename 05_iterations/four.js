const myLanguage = {
    js: "javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

//we use forIn loop to use loop in object

for (const key in myLanguage) {
    console.log(myLanguage[key]);
}