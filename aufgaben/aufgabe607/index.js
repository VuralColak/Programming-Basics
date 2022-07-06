// Aufgabe 2:
// Fantasia ist aus dem Urlaub zurück und hat sich sofort für deinen Code Review bedankt.
// Etwas verunsichert ist sie nun aber schon. Deshalb fragt sie dich in der Pause folgendes:
// “Du, ich hab ganz vergessen was ein Array ist und wieso ich das brauche…”
// Natürlich weißt du als erfahrener Programmierer bescheid und schreibst ihr alles Wichtige über Arrays auf.
// Du schreibst auf was ein Array ist
// Wofür man es braucht
// Und alles was Fantasia sonst noch über Arrays wissen sollte.
// Dabei erklärst du in deinen eigenen Worten
// Und weil du dir Mühe gibst werden es davon mindestens 100.


///////////////////////////////////////////////////////////////

console.log("Aufgabe :");

console.log("Das JavaScript-Array ist ein globales Objekt und Konstruktor für das Erstellen von Arrays, welche listenähnliche Objekte sind.");
console.log("Zum Beispiel : ");

// Ein Array erstellen

const fruits = ["Apple", "Banana"];
console.log({fruits});
console.log(fruits.length);

// Zugriff auf ein Array element (mit Index)

const first = fruits[0];
console.log({first});
// Apple

const last = fruits[fruits.length - 1];
console.log({last});
// Banana


// Über ein Array Iterieren


fruits.forEach(function(item, index, array) {
    console.log(item, index, array);
  });


// Ein Element am Ende des Arrays einfügen

fruits.push("Orange");
const newLength = fruits;
console.log({newLength});
// ["Apple", "Banana", "Orange"]


const movieCharacters = ["Thor", "Wolverine", "Thanos", "Spider-Man", "Iron-Man", "Hulk"];
console.log({movieCharacters});

const footballPlayers = ["Ronaldo", "Messi", "Lewandowski", "Arjen Robben", "Eden Hazard", "Mario Gomez", "Samuel Eto’o", "Toni Kroos", "Drogba", "Neymar", "Falcao"];

console.log({footballPlayers});

// Ein Element am Ende des Arrays löschen

movieCharacters.pop();
console.log({movieCharacters});

// Ein Element am Anfang des Arrays löschen

movieCharacters.shift();
console.log({movieCharacters});

// Ein Element am Anfang des Arrays einfügen

fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];
console.log({fruits});

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

const positionBanana = fruits.indexOf('Banana');
// 1
console.log({fruits});
console.log(positionBanana);

// Ein Element mithilfe eines Index aus dem Array löschen

const removedItem = fruits.splice(positionBanana, 1); // this is how to remove an item
console.log({removedItem});

// ["Strawberry", "Mango"]


// Elemente von einer Indexposition aus löschen

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log({vegetables});
// ["Cabbage", "Carrot"] (the original array is changed)

console.log({removedItems});
// ["Turnip", "Radish"]




// Ein Array kopieren

const shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
console.log({shallowCopy});



// Auf Elemente des Arrays zugreifen

// JavaScript-Arrays sind nullindiziert: Das erste Element eines Arrays befindet sich am Index 0, das letzte Element befindet sich an demjenigen Index, der dem Wert der Eigenschaft length des Arrays minus 1 entspricht. Die Verwendung einer ungültigen Indexnummer gibt undefined zurück.

var arr = ['Das erste Element', 'Das zweite Element', 'Das letzte Element'];
console.log(arr[0]);              // Ausgabe: 'Das erste Element'
console.log(arr[1]);              // Ausgabe: 'Das zweite Element'
console.log(arr[arr.length - 1]); // Ausgabe: 'Das letzte Element'













const favorites = movieCharacters.concat(footballPlayers);
console.log({favorites});
