// This was the first structure I tried but in order to avoid using console.log at the end I put that line inside the inner function

// function printName() {
//     let helloName = "Hello John";
//     function inner() {
//         return helloName;
//     }
//     return inner;
// }

// console.log(printName()());


function printName() {
    helloName = "Hello John";
    function inner() {
        console.log(helloName);
        return helloName;
    }
    return inner;
}

printName()();
