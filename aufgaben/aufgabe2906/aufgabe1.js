// Löse die folgenden Aufgaben mit JavaScript und gib die Lösungen auf der Konsole aus.
// Benutze sinnvolle Variablennamen.
// A: “Ein Olympisches Schwimmbecken enthält (bei einer Wassertiefe von 3 m) 3 750 m3 Wasser. Wenn keine Wettkämpfe stattfinden wird aus Kostengründen 5 cm weniger eingelassen. Wie viele l Wasser sind das?”
// B: “Mein Auto hat einen Verbrauch von 8 l/100 km. Wie weit komme ich mit einer Tankfüllung (66 l)?”
// C: “3 Arbeiter teeren die neue Unterführung und brauchen dafür 17h. Wie lange würde es dauern, wenn 5 Arbeiter eingesetzt wären?”
// D: “882 / 14 x 12 / 2.3 x 999"
// E: “12 x 7 x 17 / 7 / 17 + 333”
// F: “Familie Bayerl will einen neuen Gartenzaun an der 16,80 m langen Grundstücksgrenze ziehen. Alle 120 cm muss ein Sockel betoniert werden. Pro Sockel muss die Familie 24,40 € bezahlen. Wie viel Geld braucht die Familie für die benötigten Sockel?”





//aufgabe1-1 start


const vorname = "Vural";
const land = "Türkei";
const essen1 = "Beyti";
const essen2 = "Pirzola";
const alter = 30;
const geburtsJahr = 1991;


console.log("Hallo ich bin " + vorname + " und ich komme aus " + land + ".");

console.log("Meine Lieblingsspeisen sind " + essen1 + " und " + essen2 +".");

console.log("Ich bin " + alter + " Jahre alt und " + geburtsJahr + " geboren.");



//aufgabe1-1 end





//aufgabeA start


const meter = 100;
const schwimmbecken = 3 * meter;
const enthaelt = 3750;
const kostengründen = schwimmbecken - 5;

const wettkämpfe = (enthaelt * kostengründen) / schwimmbecken;

console.log("Aufgabe A/ Wasser = " + wettkämpfe + " m3.")



//aufgabeA end




//aufgabeB start


const verbrauch = 8;
const weg = 100;
const tankfüllung = 66;


const weit = (tankfüllung * weg) / verbrauch;

console.log("Aufgabe B/ Das Auto geht = " + weit + " km weiter.")



//aufgabeB end


//aufgabeC start

const arbeiter1 = 3;
const arbeiter2 = 5;
const lange1 = 17;


const lange2 = arbeiter1 * lange1 / arbeiter2;

console.log("Aufgabe C/ Es dauert = " + lange2 + " Stunde.")

//aufgabeC end

//aufgabeD start

const anzahl1 = 882;
const anzahl2 = 14;
const anzahl3 = 12;
const anzahl4 = 2.3;
const anzahl5 = 999;


const gesamt = anzahl1 / anzahl2 * anzahl3 / anzahl4 * anzahl5;

console.log("Aufgabe D/ Insgesamt = " + gesamt)

//aufgabeD end

//aufgabeE start

let anzahl6 = 12;
let anzahl7 = 7;
let anzahl8 = 17;
let anzahl9 = 7;
let anzahl10 = 17;
let anzahl11 = 333;


let gesamt2 = (anzahl6 * anzahl7 * anzahl8 / anzahl9 / anzahl10) + anzahl11;

console.log("Aufgabe E/ Insgesamt = " + gesamt2);


//aufgabeE end

//aufgabeF start

const grundstücksgrenze = (16 * 100) + 80;
const sockel = 120;
const sockelKosten = 24.40;


const geld = (grundstücksgrenze / sockel) * sockelKosten;

console.log("Aufgabe F/ Das kostet = " + geld + " Euro.")


//aufgabeF end
