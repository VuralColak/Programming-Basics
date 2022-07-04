// Für die folgenden Aufgaben kannst du dir Funktionen wie toString(), toFixed(), substring() und weitere zur Hilfe nehmen.
// Wichtig: Die Ausgabe soll stets ein String sein. Der String soll so geformt sein, dass er bspw. in CSS als Farbe benutzt werden kann (RGB: rgb(000, 000, 000), HEX: #000000,...).


// Verändere die Farbtöne wie angegeben.
// 1. rgb(247, 101, 101) => Rot um 80 verringern
// 2. rgb(21, 35, 112) => Blau um 100 und Grün um 75 erhöhen
// 3. rgb(167, 249, 85) => Rot und Blau auf ein Viertel reduzieren


// Gib nun die folgenden Farben in den gewünschten Formaten aus.
// 1. rgb(127, 255, 100) => HEX
// 2. #E23F76 => RGB
// 3. rgb(229, 13, 218) => HEX
// 4. #02D633 => RGB


// Und jetzt machen wir beides gleichzeitig: Farbton verändern und in andere Formate ausgeben.
// 1. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben
// 2. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben
// 3. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben
// 4. #234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben
// 5. rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben

//////////////////////////////////////////////////////7

//Aufgabe1A // 1. rgb(247, 101, 101) => Rot um 80 verringern

const aufgabe1a = "rgb(247, 101, 101)";
const rot1a = aufgabe1a.substring(4,7);
const hellRot1a = Number(rot1a) - 80; 
console.log({hellRot1a});

//Aufgabe1B // 2. rgb(21, 35, 112) => Blau um 100 und Grün um 75 erhöhen

const aufgabe1b = "rgb(21, 35, 112)";
const blau1b = aufgabe1b.substring(12,15);
const gruen1b = aufgabe1b.substring(8,10);
const dunkelBlau1b = Number(blau1b) + 100;
const dunkelgruen1b = Number(gruen1b) + 75;
console.log({dunkelBlau1b});
console.log({dunkelgruen1b});

//Aufgabe1C // 3. rgb(167, 249, 85) => Rot und Blau auf ein Viertel reduzieren

const aufgabe1c = "rgb(167, 249, 85)";
const blau1c = aufgabe1c.substring(14,16);
const rot1c = aufgabe1c.substring(4,7);
const hellBlau1c = Number(blau1c) - (Number(blau1c) / 4);
const hellRot1c = Number(rot1c) - (Number(rot1c) / 4);
console.log({hellBlau1c});
console.log({hellRot1c});

///////////////////////////////////////////////////////////

//Aufgabe2 // Gib nun die folgenden Farben in den gewünschten Formaten aus.

//Aufgabe2A // 1. rgb(127, 255, 100) => HEX

const rot2a = 127;
const gruen2a = 255;
const blau2a = 100;
const aufgabe2a = "#" + (`${rot2a.toString(16)}${gruen2a.toString(16)}${blau2a.toString(16)}`);
console.log({aufgabe2a});


//Aufgabe2B // 2. #E23F76 => RGB

const rot2b = 0xE2;
const gruen2b = 0x3F;
const blau2b = 0x76;
const aufgabe2b = "rgb(" + (`${rot2b}, ${gruen2b}, ${blau2b}`) + ")";
console.log({aufgabe2b});


//Aufgabe2C // 3. rgb(229, 13, 218) => HEX

const rot2c = 229;
const gruen2c = 13;
const blau2c = 218;
const aufgabe2c = "#" + (`${rot2c.toString(16)}${gruen2c.toString(16)}${blau2c.toString(16)}`);
console.log({aufgabe2c});


//Aufgabe2D // 4. #02D633 => RGB

const rot2d = 0x02;
const gruen2d = 0xD6;
const blau2d = 0x33;
const aufgabe2d = "rgb(" + (`${rot2d}, ${gruen2d}, ${blau2d}`) + ")";
console.log({aufgabe2d});


//////////////////////////////////////////////////

//Aufgabe3 // Und jetzt machen wir beides gleichzeitig: Farbton verändern und in andere Formate ausgeben.
//Aufgabe3A // 1. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben

const rot3a = 71 + 100;
const gruen3a = 171;
const blau3a = 247;

const aufgabe3a = "#" + (`${rot3a.toString(16)}${gruen3a.toString(16)}${blau3a.toString(16)}`);
console.log({aufgabe3a});


//Aufgabe3B // 2. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben

const rot3b = 59;
const gruen3b = 31 - 31;
const blau3b = 242 - 200;

const aufgabe3b = "#" + (`${rot3b.toString(16)}${gruen3b.toString(16)}${blau3b.toString(16)}`);
console.log({aufgabe3b});

//Aufgabe3C // 3. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben

const rot3c = 255;
const gruen3c = 0xFF;
const blau3c = 0;
const aufgabe3c = "rgb(" + (`${rot3c}, ${gruen3c}, ${blau3c}`) + ")";
console.log({aufgabe3c});

//Aufgabe3D // 4. #234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben

const rot3d = 0x23;
const gruen3d = 0x40;
const blau3d = 0x42;
const aufgabe3d = "rgb(" + (`${rot3d + (rot3d / 2)}, ${gruen3d + (gruen3d / 2)}, ${blau3d + (blau3d / 2)}`) + ")";
console.log({aufgabe3d});

//Aufgabe3E // 5. rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben

const rot3e1 = 165;
const rot3e = rot3e1 - (rot3e1 / 4);
const gruen3e = 21;
const blau3e1 = 50;
const blau3e = blau3e1 - (blau3e1 / 4);

const aufgabe3e = "#" + (`${rot3e.toString(16)}${gruen3e.toString(16)}${blau3e.toString(16)}`);
console.log({aufgabe3e});






