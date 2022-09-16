// isFinite() Methodu; girilen degerin bir rakam olup olmadigini sorguluyor.
// Number.isFinite() Methodu; girilen sayinin bir rakam olup olmadigini sorguluyor.


var deneme1 = isFinite(10);
var deneme2 = isFinite('10');
var deneme3 = isFinite(157);
var deneme4 = isFinite('hallo');
var deneme5 = isFinite('123hi');
var deneme6 = isFinite(Infinity);
var deneme7 = isFinite(0/0);
var deneme8 = isFinite(-1.23);
var deneme9 = isFinite(2022/09/16);
var deneme10 = isFinite('2022/09/16');
var deneme11 = isFinite(NaN);


console.log(' ');
console.log({deneme1});
console.log(' ');
console.log(' ');
console.log({deneme2});
console.log(' ');
console.log(' ');
console.log({deneme3});
console.log(' ');
console.log(' ');
console.log({deneme4});
console.log(' ');
console.log(' ');
console.log({deneme5});
console.log(' ');
console.log(' ');
console.log({deneme6});
console.log(' ');
console.log(' ');
console.log({deneme7});
console.log(' ');
console.log(' ');
console.log({deneme8});
console.log(' ');
console.log(' ');
console.log({deneme9});
console.log(' ');
console.log(' ');
console.log({deneme10});
console.log(' ');
console.log(' ');
console.log({deneme11});
console.log(' ');




// The isFinite() method returns true if a value is a finite number.

// Infinite (not finite) values are Infinity, -Infinity, or NaN


// Difference Between isFinite() and Number.isFinite()

// isFinite() returns true if a value is a finite number.

// Number.isFinite() returns true if a number is a finite number.

// In other words:

// isFinite() converts the value to a number before testing it.


// The Number.isFinite() method returns true if a number is a finite number.

// Infinite (not finite) numbers are Infinity, -Infinity, or NaN

// Otherwise it returns false.

