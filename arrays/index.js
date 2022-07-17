/**
 * Arrays
 *
 * Arrays sind Datentypen in denen man mehrere andere Datentypen speichern kann
 *
 * Vergleichbar ist ein Array mit einem Zug
 * Und das kommt auch nicht von irgendwo her, es sieht nämlich ein bisschen so aus. Mit Fantasie:
 *
 * ["lok", "getreide","autos","benzin"]
 *
 * Wie man sieht erstellt man Arrays mit eckigen Klammern. Und die Elemente darin sind mit Kommas getrennt.
 */
 
 /**
  * Wozu brauch man Arrays?
  * Es gibt mehrere Gründe
  *
  * - Man hat viele Daten. Zum Beispiel hunderte Instagram Follower die man effizient übertragen und verarbeiten will
  *
  * Beispiel: Einen Zug kann man einfach von vorne nach hinten abgehen und sieht dann was er transportiert.
  *
  * - Man hat eine unbekannte anzahl an Daten. Der Vorteil vom Array gegenüber einfachen Variablen ist: Man kann einfach Elemente anhängen oder wieder wegnehmen
  *
  * Info: Die größten zwei "Unbekannten-Verursacher" beim Programmieren sind Server-Abfragen und Nutzereingaben
  *
  * Beispiel: Ein Zug kann eine unbekannte anzahl an Waggons haben.
  * Eine Woche fährt der ICE733 mit 8 Waggons und in der nächsten nur mit 6. Es ist und bleibt aber der ICE733
  *
  *
  */
 

const zug = ["lok", "getreide", "autos", "benzin"];
console.log(zug);

const alleSchuelerGeburtsjahre = ["1998", "1999", "1998", "1993", "1995", "1998", "1998", "1998"];

const telefonbuch = ["+491256879543", "+496489796564"];

console.log(alleSchuelerGeburtsjahre);
console.log(telefonbuch);


console.log(zug[1]);

//                        0       1      2
const gemischtesArray = [true, "hallo", 123];
console.log(gemischtesArray[0]);
console.log(gemischtesArray[3]); // weil es gibt keine 3. element.

//////////////////////////////////////////////////////////

console.log("-------------------------------------------------------");



const ice733 = ["lok", "waggon", "speisewagen", "waggon"];
console.log(ice733);

ice733[2] = "waggon";
console.log(ice733);

////////////////////////////////////////////////////

console.log("--------------------------------------------------------------");

const telefonbuch1 = [];
console.log(telefonbuch1);
telefonbuch1.push("+4956789648");
console.log(telefonbuch1);

telefonbuch1.unshift("vor nummer hinzufügun");
telefonbuch1.push("nach nummer hinzufügun");
console.log(telefonbuch1);
telefonbuch1.push("+4911111111");
telefonbuch1.push("+4922222222");
telefonbuch1.push("+4933333333");
console.log(telefonbuch1);

telefonbuch1.pop(); //Pop löscht das letzte element im Array.
console.log(telefonbuch1);

telefonbuch1.shift(); //Shift löscht das erste element im Array.
console.log(telefonbuch1);


///////////////////////////////////////////////////////
console.log("--------------------------------------------------------------");

const sayi1 = [2, 5, 3, 11, 17, 7, 1, 19].indexOf(17);
console.log({sayi1});

const sayi3 = [2, 5, 3, 11, 17, 7, 1, 19];

const sayi2 = [5, 7, 3, 12, 16, 9, 1, 21];
sayi2.reverse();
console.log({sayi2}); // { sayi2: [21, 1, 9, 16, 12, 3, 7,  5] }


const langerAnzahl = sayi2.concat(sayi3);
console.log({langerAnzahl});