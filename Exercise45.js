function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let oldPhone = new Smartphone("LG", "G4", 200)
let newPhone = new Smartphone("Huawei", "P20", 250)

console.log(oldPhone);
console.log(newPhone);