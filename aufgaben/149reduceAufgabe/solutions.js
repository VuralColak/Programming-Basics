console.log(' ');
console.log('---Vural`s Aufgabe Lösung-1---');
console.log(' ');

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];


const count = fruitBasket.reduce( (tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {});


console.log({count});  // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

console.log(' ');
console.log('---Vural`s Aufgabe Lösung-2---');
console.log(' ');


const count2 = {};

fruitBasket.forEach(element => {
  count2[element] = (count2[element] || 0) + 1;
});

console.log({count2});





// const car = {type:"Fiat", model:"500", color:"white"};

// car['deneme'] = 40;


// console.log(car);



console.log(' ');
console.log('---Ella`s Aufgabe---');
console.log(' ');



function duplikate(str) {
    const arrFromStr = str.toLowerCase().split("").sort();
    const newArr = [];
    arrFromStr.forEach((elem) => {
      if(arrFromStr.indexOf(elem) !== arrFromStr.lastIndexOf(elem)){
        newArr.push(elem);
      }
    })
    if(newArr.length === 0) return 0;
    const filteredArr = [];
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] != newArr[i + 1]) filteredArr.push(newArr[i]);
    }
    return `${filteredArr.length}: ${filteredArr.join(", ")}`;
};


console.log(duplikate("abcde"));
console.log(duplikate("aabbcde"));
console.log(duplikate("aabBcde"));
console.log(duplikate("aA11"));
console.log(duplikate("aabbccdd"));
console.log(duplikate("aabbb"));



console.log(' ');
console.log('---Yarooub`s Aufgabe---');
console.log(' ');