// In JavaScript NaN is short for "Not-a-Number".

// The isNaN() method returns true if a value is NaN.

// The isNaN() method converts the value to a number before testing it.



// Difference Between isnan() and Number.isnan()

// isNaN() method returns true if a value is Not-a-Number.

// Number.isNaN() returns true if a number is Not-a-Number.

// In other words:

// isNaN() converts the value to a number before testing it.



const deneme1 = isNaN(123);
const deneme2 = isNaN(-1.23);
const deneme3 = isNaN(5-2);
const deneme4 = isNaN(0);
const deneme5 = isNaN('123');
const deneme6 = isNaN('Hello');
const deneme7 = isNaN('2005/12/12');
const deneme8 = Number.isNaN('Hello');
const deneme9 = isNaN(0/0);
const deneme10 = isNaN(' ');
const deneme11 = isNaN('A');
const deneme12 = isNaN(true);
const deneme13 = isNaN(false);
const deneme14 = isNaN('NaN');
const deneme15 = isNaN(NaN);
const deneme16 = isNaN(undefined);
const deneme17 = isNaN(null);


console.log(' ');
console.log({deneme1});
console.log(' ');
console.log({deneme2});
console.log(' ');
console.log({deneme3});
console.log(' ');
console.log({deneme4});
console.log(' ');
console.log({deneme5});
console.log(' ');
console.log({deneme6});
console.log(' ');
console.log({deneme7});
console.log(' ');
console.log({deneme8});
console.log(' ');
console.log({deneme9});
console.log(' ');
console.log({deneme10});
console.log(' ');
console.log({deneme11});
console.log(' ');
console.log({deneme12});
console.log(' ');
console.log({deneme13});
console.log(' ');
console.log({deneme14});
console.log(' ');
console.log({deneme15});
console.log(' ');
console.log({deneme16});
console.log(' ');
console.log({deneme17});