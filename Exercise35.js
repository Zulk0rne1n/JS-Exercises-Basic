// function canPlay() { 
//     let sport = " Football";
//     if (true) { 
//         let personName = "Cosimo";
//     }
//     console.log(personName + sport); || Function's scope cannot access this line of code because personName is defined within the if block's scope.
//                                          one way to solve this is to put this line inside the if statement 
//                                          or we can use `var` keyword instead of `let` inside the if statement so it can be accesible outside of its scope
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