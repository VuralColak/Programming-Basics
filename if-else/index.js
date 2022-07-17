/**
 * if else
 *
 * Was ist das?
 * Es ist ein Conditional. Auf gut Deutsch eine Weiche mit der man sein Programm auf verschiedene Wege lenken kann.
 * Wenn ein if else wie eine Weiche ist. Dann ist ein Boolean der Weichensteller.
 *
 * Wozu brauch man es?
 * Man kann abhängig von einer "Condition" Code ausführen
 *
 * Stichwort Booleans
 *
 * Wie funktioniert es?
 * Ist die Bedingung zwischen den runden Klammern wahr wird der Code zwischen den geschweiften Klammern ausgeführt
 *
 * if(Bedingung){
 *  Code
 * }
 */



// if else

const istHeuteDonnerstag = false;

if (istHeuteDonnerstag) {
    console.log("Es ist Donnerstag");
} else {
    console.log("Es ist NICHT Donnerstag");
}

/**
 * else
 *
 * Der else Block wird ausgeführt wenn die Bedingung zwichen den Runden klammern falsch ist
 */


/**
 * if else if ...
 *
 * Man kann das normale if else auch durch weitere if´s und else erweitern
 */



// if else if

const tag = "Donnerstag";

if (tag == "Montag") {
    console.log("Montag");
} else if (tag == "Dienstag"){
    console.log("Dienstag");
} else if (tag == "Mittwoch"){
    console.log("Mittwoch");
} else if (tag == "Donnerstag"){
    console.log("Donnerstag");
} else if (tag == "Freitag"){
    console.log("Freitag");
} else if (tag == "Samstag"){
    console.log("Samstag");
} else {
    console.log("Sonntag");
};


// Wenn der Code im if statement nur aus einem Ausdruck bzw. einer Zeile besteht, braucht man die geschweiften Klammern nicht.

const day = "Donnerstag";

if (day === "Donnerstag") console.log("Bald Wochenende");



// Schwierige Bedinungen


const alterSuse = 18;
const alterMarie = 19;
const alterJonas = 7;


if (alterSuse >= 18 && alterMarie >= 18 && alterJonas >= 18) {
    console.log("Ihr dürft alle drei auf das Festival");
} else {
    console.log("Alle müssen >= 18 sein!");
};


if (alterMarie >= 18 || alterJonas >= 18)
    console.log("Einer von euch ist >= 18");






// Ternary = Ein kurzes if, else statement auf einer Zeile.


// const alterJonas1 = 18;

// alterJonas1 >= 18
//     ? console.log("Du darfst Vodka kaufen")
//     : console.log("Du darfst Saft kaufen");


// const verkäuferAntwort =
//     alterJonas1 >= 18 ? "Du darfst Vodka kaufen" : "Du darfst Saft kaufen";

// console.log(verkäuferAntwort);


// const istJonaszwischen16Und21 = alterJonas1 >= 16 && alterJonas1 < 21;



/**
 * Ternary
 *
 * Was ist eine Ternary?
 * Ein kurzes if, else statement auf einer Zeile.
 *
 * Eine Ternary ist so aufgebaut:
 *
 * bedingung ? antwort falls wahr : antwort falls falsch
 */

 const alterJonas1 = 48;

 alterJonas1 >= 18
     ? console.log("Du darfst Vodka kaufen")
     : console.log("Du darfst Saft kaufen");
 
 /**
  * Aber eine Ternary kann noch mehr:
  * Wird eine Ternary ausgeführt, bleibt am Ende die Antwort stehen.
  */
 
 const verkäuferAntwort =
     alterJonas >= 18 ? "Du darfst Vodka kaufen" : "Du darfst Saft kaufen";
 
 console.log(verkäuferAntwort);
 
 const istJonasZwischen16Und21 = alterJonas >= 16 && alterJonas <= 21;
 console.log(
     istJonasZwischen16Und21 ? "Ja er ist dazwischen" : "Nein ist er nicht"
 );
 
 

 
// Varablen mit dem Or|| Operator zuweisen

const value1 = null;
const value2 = "Hallo";

const derWahreWert = value1 || value2;

console.log(derWahreWert);


//

value3 = false;
value4 = null;

const ergebnis = value3 && value4;
console.log({ergebnis});



//

const serverAntwortFollower = null;
// const serverAntwortFollower = ["Benni123", "Juliaxsd"];
const defaultFollow = ["Du hast noch keine Follower"];

const showUser = serverAntwortFollower || defaultFollow;
console.log(showUser);

// ----

const darfUserBildSehen = false;
const bild = "Das Bild";
const output = darfUserBildSehen && bild;
console.log({output});



// ------------------------------------

console.log();
console.log("---------------------------");
console.log();


/*
 * Um genau zu sein wird Code in einem if statement ausgeführt
 * falls die Bedingung zwischen den Klammern "truthy" is
 */

// Beispiele für truthy Werte

if (true) console.log(`true ist truthy`); // was auch sonst ;)
if (1) console.log(`1 ist truthy`);
if (42) console.log(`42 ist truthy`);
if ("hallo du da") console.log(`strings mit Inhalt sind truthy`);
if ({}) console.log("Objekte sind truthy");
if ([]) console.log("Arrays sind truthy");

// Beispiele für falsy Werte

if (false) console.log(`Kommt nie!`);
else console.log(`false ist falsy`); // was auch sonst ;)

if (0) console.log(`Kommt nie!`);
else console.log(`0 ist falsy`);

if (null) console.log(`Kommt nie!`);
else console.log(`null ist falsy`);

if (undefined) console.log(`Kommt nie!`);
else console.log(`undefined ist falsy`);

if ("") console.log(`Kommt nie!`);
else console.log(`Ein leerer String ist falsy`);

if (NaN) console.log(`Kommt nie!`);
else console.log(`NaN ist falsy`);






