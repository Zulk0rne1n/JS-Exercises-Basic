function printName() {
    helloName = "Hello John";
    function inner() {
        setTimeout(() => {
            console.log(helloName);
            return helloName;
        }, 1000);
    }
    return inner;
}

printName()();