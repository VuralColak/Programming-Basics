// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:


let myFunction = (a, b) => a * b;

console.log(myFunction(4,5));


////////////////////////////////


// This example shows the syntax of a function, without the use of arrow function syntax.


var hello1;

hello1 = function() {
  return "Hello World!";
};

console.log(hello1());


//////////////////////////////////

// This example shows the syntax of an Arrow Function, and how to use it.
// With Arrow Function:


var hello2;

hello2 = () => {
  return "Hello World!";
};

console.log(hello2());


///////////////////////////////////

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

// This example shows an Arrow Function without the brackets or the return keyword.

// Arrow Functions Return Value by Default:


var hello3;

hello3 = () => "Hello World!";

console.log(hello3());


// Note: This works only if the function has only one statement.


/////////////////////////////////

// If you have parameters, you pass them inside the parentheses:

// Arrow Function With Parameters:

// This example shows an Arrow Function with a parameter.

var hello4;

hello4 = (val) => "Hello " + val;

console.log(hello4("Universe!"));

///////////////////////////////////////

// In fact, if you have only one parameter, you can skip the parentheses as well:

// Arrow Function Without Parentheses:

// This example shows that if you have only one parameter in an Arrow Function, you can skip the parentheses.

var hello5;

hello5 = val => "Hello " + val;

console.log(hello5("Universe!"));

//////////////////////////////////////////
