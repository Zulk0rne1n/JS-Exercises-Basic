let firstName = "Ulaş"

function sayHelloName(callback) {
    console.log("Hello");
    callback();
}

function printName(){
    console.log(firstName);
}

sayHelloName(printName);