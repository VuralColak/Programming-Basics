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



