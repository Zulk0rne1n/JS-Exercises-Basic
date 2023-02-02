function multiplyByTwo(value) {
    function inner() {
        let number = 2;
        return(value * number);
    }
    return inner();
}

console.log(multiplyByTwo(5));


// let value = 3;
// let result = () => console.log(multiplyByTwo(value));
// result();
// I've commented out added this part for future ref. //