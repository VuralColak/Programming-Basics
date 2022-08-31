console.log(' ');
console.log('----Aufgabe-1--------');
console.log(' ');


// Erstellen Sie eine Funktion, die true zurückgibt, wenn das erste Array im zweiten verschachtelt werden kann.

// arr1 kann innerhalb von arr2 verschachtelt werden, wenn:

// -   arr1's kleinste Zahl größer ist als arr2's kleinste Zahl.
// -   arr1's größte Zahl kleiner ist als arr2's größte Zahl.

// ## Beispiele:

// ```js

// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// ```

// Lösung-1

const canNest = (a,b) => {
    const x = a.sort();
    const y = b.sort();

    if(x[0] > y[0] && x[x.length-1] < y[y.length-1]){
        return true;
    } else return false;
};

// Lösung-2

// const canNest =(a,b)=>{
//     if(Math.min(...a)> Math.min(...b)&& Math.max(...b)>Math.max(...a)){
//         return true;
//     }
//     else {
//         return false;
//     }
// };



console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));


console.log(' ');
console.log('----Aufgabe-2--------');
console.log(' ');




// Deine Aufgabe ist es, eine Kreis Klasse zu erstellen. Die konstruierten Kreise müssen zwei Methoden haben: getArea() (PI*r^2) und getPerimeter() (2*PI\*r), die sowohl die jeweilige Fläche als auch den Umfang angeben.

// ## Examples

// ```js
// let circy = new Circle(11);
// circy.getArea(); // Should return 380.132711084365

// let circy = new Circle(4.44);
// circy.getPerimeter(); // Should return 27.897342763877365


class Circle {

    constructor(radius) {
        this.radius = radius; 
    }

    getArea(){
        return Math.PI*this.radius*this.radius;

    };

    getPerimeter(){
        return 2*Math.PI*this.radius 
    }

};


let circy1 = new Circle(11);
console.log(circy1.getArea()); // Should return 380.132711084365

let circy2 = new Circle(4.44);
console.log(circy2.getPerimeter()); // Should return 27.897342763877365



console.log(' ');
console.log('----Aufgabe-3--------');
console.log(' ');


// Erstellen Sie eine Funktion `makePlusFunction`, die eine "Basiszahl" als Argument annimmt. Diese Funktion sollte eine neue Funktion zurückgeben, die ein neues Argument annimmt und die Summe aus der "Basiszahl" und dem neuen Argument zurückgibt.

// In den folgenden Beispielen wird das erwartete Verhalten klarer dargestellt.

// ## Beispiele

// ```js
// const plusFive = makePlusFunction(5);
// plusFive(2); // returns 7
// plusFive(-8); // returns 3

// const plusTen = makePlusFunction(10);
// plusTen(0); // returns 10
// plusTen(188); // returns 198
// ```


function makePlusFunction (Basiszahl) {
    return function SumFunction (zahl) {
        return Math.abs(Basiszahl + zahl);
    }
};

const plusFive = makePlusFunction(5);
console.log(plusFive(2)); // returns 7
console.log(plusFive(-8)); // returns 3

const plusTen = makePlusFunction(10);
console.log(plusTen(0)); // returns 10
console.log(plusTen(188)); // returns 198
