// <!-- Switch if...
// Work in solution.js

// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color option. (red, blue, green, yellow).

// Create a variable called color and print the following if color:
// -   "red" => print "Q1: Red's a great color on you."
// -   "blue" => print "Q1: Blue? Great choice."
// -   "green" => print "Q1: Ok. Green it is."
// -   "yellow" => print "Q1: Not what I would have picked, but yellow is fine."
// -   if the value in none of the above => print "Q1: The aim of the game is to pick a color."
// 2. Grading
// Create a switch statement that prints different comments depending on a grade.

// Create a variable called grade and print the following if grade:
// -   "A" => print "Q2: A - Well done!"
// -   "B" => print "Q2: B - Good on you!"
// -   "C" => print "Q2: C - Good effort"
// -   "D" => print "Q2: D - Try harder next time..."
// -   if the value is none of the above => print "Q2: Yikes..."
// 3. Fruits
// Create a switch statement that prints different statement for various fruit (banana, orange, strawberry, apple).

// Create a variable called fruit and print the following if fruit:
// -   "apple" => print "Q3: An apple a day keeps the doctor away."
// -   "banana" => print "Q3: Bananas are full of potassium."
// -   "orange" => print "Q3: Yep, oranges. Great choice."
// -   "strawberry" => print "Q3: Mmmm...nothing better than strawberries."
// -   if the value is none of the above => print "Q3: PICK A FRUIT"
// 4. Percentage Complete.
// Create a variable called percentageComplete and print the following if percentageComplete:
// If percentageComplete is below 30, print "Q4: Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Q4: Slowly getting there".
// If percentageComplete is between 51 and 80, print "Q4: You can do it!".
// If percentageComplete is between 81 and 99, print "Q4: This is the last push!".
// If percentageComplete is 100, print "Q4: You're there. Well done!".
// Switch case OR If statement
// When should you use a switch statement versus an if else statement? Comment your answer in your js file. -->


////////////////////////////////



//1

const farbe = "banane";

switch (farbe) {
    case "red":
        console.log("Q1: Red's a great color on you.");
        break;
    case "blue":
        console.log("Q1: Blue? Great choice.");
        break;
    case "green":
        console.log("Q1: Ok. Green it is.");
        break;
    case "yellow":
        console.log("Q1: Not what I would have picked, but yellow is fine.");
        break;
    default:
        console.log("Q1: The aim of the game is to pick a color.");
}

//2
//3
//4

const percentageComplete = 70;

// Variante 1
if (percentageComplete < 30) {
    console.log("Q4: Still a long way to go");
} else if (percentageComplete >= 30 && percentageComplete <= 50) {
    console.log("Q4: Slowly getting there");
} else if (percentageComplete >= 51 && percentageComplete <= 80) {
    console.log("Q4: You can do it!");
} else if (percentageComplete >= 81 && percentageComplete <= 99) {
    console.log("Q4: This is the last push!");
} else {
    console.log("Q4: You're there. Well done!");
}

// Variante 2
if (percentageComplete === 100) {
    console.log("Q4: You're there. Well done!");
} else if (percentageComplete >= 81) {
    console.log("Q4: This is the last push!");
} else if (percentageComplete >= 51) {
    console.log("Q4: You can do it!");
} else if (percentageComplete >= 30) {
    console.log("Q4: Slowly getting there");
} else {
    console.log("Q4: Still a long way to go");
}