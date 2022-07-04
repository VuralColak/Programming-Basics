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



console.timeEnd("debug");




