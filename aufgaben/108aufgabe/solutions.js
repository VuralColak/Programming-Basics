// Aufgabe 1:

// Erstelle das folgende Objekt:

// const student = {
// firstName: "John",
// lastName: "Smith",
// class: 12 };

// Erstelle eine Methode, die das Folgende ausgibt:
// "John smith is a student in class 12"

// 1. Erstelle ein person object. Füge den Vor- und Nachnamen, das Alter, den Beruf, die Stadt usw. der Person hinzu. Erstelle eine Methode, um Daten aus dem Objekt zu drucken, z.B. “John Smith is a 41 year old engineer living in France”.

// Bonus
// Schreibe eine Methode, um die Länge des person objects zu ermitteln.


console.log('    ');
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12 
};

console.log(`${student.firstName} ${student.lastName} is a student in class ${student.class}`);


console.log('    ');
console.log('-------------');
console.log('    ');


const personA = {
    vorname: 'John',
    nachname: 'Smith',
    alter: '41',
    beruf: 'engineer',
    stadt: 'Paris',
    land: 'France'
};

console.log(`${personA.vorname} ${personA.nachname} is a ${personA.alter} year old ${personA.beruf} living in ${personA.stadt}/${personA.land}.`);
console.log('    ');







// Aufgabe 3:

// Dein eigenes Math Objekt.
// Erstelle ein neues Objekt und lege es in einer Variable mit dem namen MyMath ab.
// Das Objekt soll die Methoden ceil, floor, pow, sqrt und abs des Math Objekts besitzen.
// Die Methoden sollen sich genau so verhalten wie die echten Math Methoden.

// Beispiel:
// MyMath.ceil(2.4) // Gibt 3 zurück
// MyMath.floor(2.4) -> // Gibt 2 zurück
// MyMath.pow(2,3) ->// Gibt 8 zurück
// MyMath.sqrt(16) -> // Gibt 4 zurück
// MyMath.abs(-1) -> // Gibt 1 zurück
// MyMath.abs(1) -> // Gibt 1 zurück

// Leicht: Verwende das Math Objekt um diese Aufgabe zu lösen

// Schwer: Überlege selbst wie du die Methoden implementieren kannst.

const MyMath = {
    ceil: function(number) {
        console.log(parseInt(number) +1);
    },
    floor: function(number) {
        console.log(parseInt(number));
    },
    pow: function(number, number2) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        };
    },
}