// # forEach() und map()

// **1.** Schreiben Sie eine Funktion namens `doubleValues`, die ein Array akzeptiert und ein neues Array zurückgibt, in dem alle Werte verdoppelt sind.

// Beispiele:
// ```
// doubleWerte([1,2,3]) // [2,4,6]
// doubleWerte([5,1,2,3,10]) // [10,2,4,6,20]

console.log('...........');
console.log('--------aufgabe-1-------');
console.log('...........');

const doubleWerte1 = [1,2,3]; // [2,4,6]
const doubleWerte2 = [5,1,2,3,10]; // [10,2,4,6,20]


function doubleValues(x) {
    const a = x.map((y) => {
        return y*2;
    });
    return a;
}


// const doubleValues = doubleWerte1.map((element) => {
//     return element*2;
// });

console.log(doubleValues(doubleWerte1));
console.log(doubleValues(doubleWerte2));

console.log('...........');
console.log('--------aufgabe-2-------');
console.log('...........');


// **2.** Schreiben Sie eine Funktion namens `onlyEvenValues`, die ein Array annimmt und ein neues Array zurückgibt, das nur die geraden Werte des Arrays enthält, das der Funktion übergeben wurde.

// Beispiele:
// ```
// nurGeradeWerte([1,2,3]) // [2]
// nurGeradeWerte([5,1,2,3,10]) // [2,10]
// ```


const nurGeradeWerte1 = [1,2,3]; // [2]
const nurGeradeWerte2 = [5,1,2,3,10]; // [2,10]


function onlyEvenValues(y) {
    
    const b = y.map((param) => {
    
        if(param%2 === 0){
            return param;
        } else {
            return y.splice(param, 1);
        };
        
    });
    return b;
};

console.log(onlyEvenValues(nurGeradeWerte1));
console.log(onlyEvenValues(nurGeradeWerte2));


console.log('...........');
console.log('--------aufgabe-3-------');
console.log('...........');

// **3.** Schreiben Sie eine Funktion namens `showFirstAndLast`, die ein Array von Zeichenketten akzeptiert und ein neues Array mit nur dem ersten und letzten Zeichen jeder Zeichenkette zurückgibt

// Beispiele:

// ```js
// showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
// ```

const showFirstAndLast1 = ['colt','matt', 'tim', 'udemy']; // ["ct", "mt", "tm", "uy"]
const showFirstAndLast2 = ['hi', 'goodbye', 'smile']; // ['hi', 'ge', 'se']


function showFirstAndLast(w) {

    const c = w.map((param3) => {
    
        console.log(param3.slice(0, 1), param3[param3.length-1]);
        
    });
};

console.log(showFirstAndLast(showFirstAndLast1));
console.log(showFirstAndLast(showFirstAndLast2));








