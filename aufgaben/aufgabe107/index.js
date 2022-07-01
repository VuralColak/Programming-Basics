//logical operators

//Frage1

let isDogBetter = true;
let isCatBetter = false;

//Frage2-a
console.log (isDogBetter && isCatBetter);
//Frage2-b
console.log (isDogBetter || isCatBetter);
//Frage2-c
console.log (!(isDogBetter && isCatBetter));


//Frage3

let atoms = 111;
let sandGrains = 222;
let starsInSky = 333;

//Frage4-a

if((atoms > starsInSky) && (atoms > sandGrains)){
    console.log("Block1")
} else {
    console.log("Block2")
}

//Frage4-b

console.log (!(atoms === sandGrains));

//Frage4-c

console.log ((starsInSky < sandGrains) || (starsInSky > atoms));

//Frage4-d

console.log ((atoms === starsInSky) || !(atoms === sandGrains));

//Frage4-e

console.log ((atoms >= 10) && (sandGrains <= 10));

//Frage4-f

console.log (((atoms * starsInSky) < 100) || ((atoms * sandGrains) > 100));


let count = 0;
while (count < 10){
    console.log ("Hallo Vural");
    count = count + 1;
}
