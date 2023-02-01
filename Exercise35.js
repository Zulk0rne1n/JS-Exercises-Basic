// function canPlay() { 
//     let sport = " Football";
//     if (true) { 
//         let personName = "Cosimo";
//     }
//     console.log(personName + sport); || Function's scope cannot access this line of code because personName is defined within the if block's scope
// }

// canPlay()


function canPlay() { 
    let sport = " Football";
    if (true) { 
        let personName = "Cosimo";
    console.log(personName + sport);
    }
}
canPlay();