let people = [
    { name: 'Paul', age: 21 }
];

function nicknameMap(people) {
    let nickname = people.map((el) => el.name + "-" + el.age);
    return nickname
}

const nickname = nicknameMap(people);
console.log(nickname);