// Print in the console the price of the room according to the following scheme:

// Price for Basic Room --> 50€
// Price for Junior Suite Room --> 80€
// Price for Master Suite --> 100€

let roomType = "Junior Suite Room";
let price = 0;
switch(roomType) {
    case "Basic Room":
        price = 50;
        console.log("Price for the Basic Room -->" + " " + price + "€");
        break;
    case "Junior Suite Room":
        price = 80;
        console.log("Price for the Junior Suite Room -->" + " " + price + "€");
        break;
    case "Master Suite":
        price = 100;
        console.log("Price for the Master Suite -->" + " " + price + "€");
        break;
    default :
        console.log("You didn't choose a room")
}
