let user = {
    name: "Cosimo",
    age: 30,
};

// we need an empty object
let newUser = {}; 

// cloning the keys to newUser
for (let key in user) {
    newUser[key] = user[key];
}

newUser.name = "Paolo";
newUser.age = 29;

console.log(user);
console.log(newUser);
