console.log(' ');
console.log('----Aufgabe-1--------');
console.log(' ');

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