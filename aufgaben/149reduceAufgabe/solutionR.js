const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// Ergebnis; { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const zahlVonFruechte = (elem) => elem.reduce((prev, curr) => {
    if(prev[curr] === undefined) prev[curr] = 1;
    else prev[curr] += 1

    return prev;
}, {})

console.log(zahlVonFruechte(fruitBasket));


console.log(' ');
console.log('---Object-----');
console.log(' ');

const car = {type:"Fiat", model:500, color:"white"};

car['deneme'] = 40;


console.log(car);
console.log(car['model']);
console.log(car.type);