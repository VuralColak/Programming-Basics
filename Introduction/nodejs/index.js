console.time("debug");

const a = 1;

if (a == true) {
    console.log ("halloa");
} else {
    console.log("tschüss!a");
}


const b = null;

if (b == true) {
    console.log ("hallob");
} else {
    console.log("tschüss!b");
}


const c = "abc";

if (c == true) {
    console.log ("halloc");
} else {
    console.log("tschüss!c");
}

const d = "";

if (d == true) {
    console.log ("hallod");
} else {
    console.log("tschüss!d");
}


const e = "abc";

if (e) {
    console.log ("halloe");
} else {
    console.log("tschüss!e");
}

const f = "";

if (f == true) {
    console.log ("hallof");
} else {
    console.log("tschüss!f");
}

// 12 == "12" => true
// 12 === "12" => false

const g = "asdasd";

if (!!g == true) {
    console.log ("hallog");
} else {
    console.log("tschüss!g");
}


const h = 1;

if (h == true) {
    console.log ("halloh1");
} else {
    console.log("tschüss!h1");
}

if (h === true) {
    console.log ("halloh2");
} else {
    console.log("tschüss!h2");
}


const text = " Lorem Ipsum Dolor sit amet. ";

console.log(text);

console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(text.length);

console.log(parseInt(text));

console.log(text.substring(1, 12));

console.log(text.substring(13));

console.log(text.trim(text));
console.log(text.trim().length);

console.log(text.trim().length, text.trim().toUpperCase());
console.log(text.trim().length, text.trim().toLowerCase());


const color = "rgb(255, 127, 200)";
// => rot: 255, grün: 127, blau: 0

console.log("rot: ", color.substring(4,7), "grün: ", color.substring(9,12), "blau: ", color.substring(14,17));

console.log(`rot: ${color.substring(4,7)}, grün: ${color.substring(9,12)}, blau: ${color.substring(14,17)}`);

const rot = color.substring(4,7);
const gruen = color.substring(9,12);
const blau = color.substring(14,17);

const gruenReduziert = gruen - 100;

const ergebnis = `rot: ${rot}, grün: ${gruenReduziert}, blau: ${blau}`;
console.log(ergebnis);



///////String/////7

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

//it can be done in 4 different ways.




const text1 = "Lorem Ipsum Dolor sit Vural amet.";
const searchTerm = "Vural";

//1. Text lesen und searchTerm suchen
const isInText1 = text1.includes(searchTerm);
//2. Antwort sagen
console.log(isInText1);

if (isInText1) {
    console.log("Willkommen");
} else {
    console.log("bye bye");
}


//Wenn Vural in Text enthalten ist, gib "true" aus.
//Wenn Vural nicht in text enthalten ist, gib "false" aus.

//If (text == "Vural") console.log(true);
//If (text.includes(searchTerm)) console.log(true);


//aufgabe1

const color1 = "rgb(20, 100, 0)";
//Erhöhe den Rot-Kanal um 100 und gib nur den Rot-Knal aus

//1. Rot extrahieren
const rot1 = color.substring(4,6);
console.log(typeof rot1);
// // 1. Way; const rot1Number = parseInt(rot1);
// // // The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
// // 2. Way: const rot1Number = Number(rot1);
// // 3. Way:
const rot1Number = +rot1;
//2. Rot um 100 erhöhen
const hellRot = rot1Number + 100;
//3. Rot ausgeben
console.log(hellRot);

// NaN => Not a Number.

// Doing Hexadecimal;
const testBlau = 205;
console.log(testBlau.toString());
console.log(testBlau.toString(16));
console.log(testBlau.toString(2));
console.log(testBlau.toString(5));
console.log(testBlau.toString(10));

const testGruen = 0xDF;
console.log(testGruen);

const testGruen1 = "0xDF";
console.log(testGruen1);




console.timeEnd("debug");




