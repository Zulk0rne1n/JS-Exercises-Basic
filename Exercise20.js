let primitive = true;
let str = "";

if (typeof primitive === "number") {
    str = "The type of this variable is a Number"

}else if(typeof primitive === "string") {
    str = "The type of this variable is a String"

}else if(typeof primitive === "boolean") {
    str = "The type of this variable is a Boolean"

}else {
    str = "Error: variable undefined"
}
console.log(str)