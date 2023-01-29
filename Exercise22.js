const primitive = true;
const type = typeof primitive;
let systemMessage = "";

switch(type) {
    case "number":
        systemMessage = "The type of this variable is a Number";
        break;
    case "string": 
        systemMessage = "The type of this variable is a String";
        break;
    case "boolean" : "The type of this variable is a Boolean";
        break;
    default :
        systemMessage = "Undefined"
        break;

}
console.log(type);
