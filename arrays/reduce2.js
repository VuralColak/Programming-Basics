let data = [2, 4, 6, 8];
const reducer = function (accumulator, item) {
    return accumulator + item;
};

const firstValue = 0;
const sum = data.reduce(reducer, firstValue);
console.log("Toplam değer: ", sum);
// Toplam değer: 20


console.log('**********');



let books = [
    'javascript',
    'javascript',
    'clojure',
    'clojure',
    'clojure',
    'java”',
    'kotlin',
    'kotlin',
 ];
 const firstValue2 = {};
 const reducer2 = function(obj, count){
    if (!obj[count]){
       obj[count] = 1;
    } else {
       obj[count] = obj[count] + 1;
    }
    return obj;
 };
 const result = books.reduce(reducer2, firstValue2);
 
 console.log('Okuduğum kitaplar: ', result);
 
 //Okuduğum kitaplar: { javascript:2, clojure:3, java: 1, kotlin: 2 }


 console.log('**********');


 const numbers = [175, 50, 25];

 function myFunc(total, num) {
    return total - num;
}

console.log(numbers.reduce(myFunc));




console.log('**********');


const numbers2 = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
    return total + Math.round(num);
}


console.log(numbers2.reduce(getSum, 0));


console.log('**********');


// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.



// Syntax;

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


let shoppingCart = [
    {
      product: 'phone',
      qty: 1,
      price: 500,
    },
    {
      product: 'Screen Protector',
      qty: 1,
      price: 10,
    },
    {
      product: 'Memory Card',
      qty: 2,
      price: 20,
    },
];


let total = shoppingCart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.qty * currentValue.price;
}, 0);

console.log({total});



console.log('**********');



// Finding an Average with the Reduce Method In JavaScript​


const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

console.log({average}); // 39.37



console.log('**********');



const average2 = euros.reduce((total, amount, index, array) => {
    total += amount
    return total/array.length
}, 0);


console.log({average2}); // 21.252222222222223




console.log('**********');


const euros2 = [29.76, 41.85, 46.5];

const doubled = euros2.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

console.log({doubled}); // [59.52, 83.7, 93]


console.log('**********');



const euro = [29.76, 41.85, 46.5];

const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);

console.log({above30}); // [ 41.85, 46.5 ]



console.log('**********');




const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})

console.log({count}); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }



// devami bu sitede; https://www.freecodecamp.org/news/reduce-f47a7da511a9/

