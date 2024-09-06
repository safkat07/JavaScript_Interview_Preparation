// immediately invoked function expression

(function DB() {
    console.log(" DB connected");
})();

    (() => {
    console.log("2nd db");
})()

/* we face problems with global scope polution, to remove the global scope variable polution we usually use IIFE
*/
(function() {
    // All variables and functions here are scoped locally
    var message = "Hello, World!";
    console.log(message); // Output: Hello, World!
})();

// Trying to access the 'message' variable outside the IIFE
console.log(message); // ReferenceError: message is not defined
