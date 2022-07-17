/*
 * Variablen
 *
 * Was sind Variablen?
 * Variablen sind wie Boxen denen man einen Namen geben kann
 * Und in denen man Datentypen ablegen kann
 *
 *
 */

/**
 * Die erste Art Variablen zu deklarieren ist mir "var"
 * var, dann der Name der Variable, dann ein Gleichzeichen,
 * und dann der Wert der darin abgelegt werden soll
 */
 var nameDerVariable = "Banane";

 /**
  * Mit let kann man Boxen deklarieren in die man Dinge rein und wieder raus nehmen kann
  */
 let auchEinVariablenName = "Apfel";
 
 /**
  * Mit const deklariert man "Konstanten". Das sind Boxen in die man nur ein mal etwas rein legen kann
  * Danach kann man es nicht mehr verändern
  */
 const blablaEinWeitererName = "Birne";



console.log ("Hello, Welcome to My First JavaScript File...")


const essen1 = "Pilav"
const essen2 = "Adana Kebap"
const essen3 = "Beyti"
const essen4 = "Döner"
const essen5 = "Pirzola"

console.log("My Favorite Food is " + essen3)

console.log(essen3, typeof essen3)




const marvinsLieblingsessen = essen3;
console.log("Marvins Lieblingsessen:", marvinsLieblingsessen);

const marcelsLieblingsessen = essen1;
console.log("Marcels Lieblingsessen:", marcelsLieblingsessen);

const yaaroubsLieblingsessen = essen5 + " " + essen3;
console.log("Yaaroubs Lieblingsessen:", yaaroubsLieblingsessen);

/**
 * Wie sollte man Variablen bennenen?
 * Der erste Buchstabe ist immer klein
 * Alle weiteren Wörter beginnen mit großbuchstaben
 * z.B anzahlTüren
 *
 * Handelt es sich um eine super wichtige bombenfeste nie veränderbare * Konstante, also const Variable schreibt man den namen GANZ_GROSS
 */

const SERVER_PASSWORT = "qweuohasdhq876127836";
const API_PATH = "api.example.com/api/v2";