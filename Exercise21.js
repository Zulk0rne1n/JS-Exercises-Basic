let password = "asd12";
let len = password.length;
let systemMessage = "";

if (len >= 4 && len <=6) {
    systemMessage = "Password length is correct";

}else {
    systemMessage = "Password not valid";
}

console.log(systemMessage);