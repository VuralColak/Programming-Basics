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
    class: 12,
    info: function() {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    }
};

console.log(student.info());


console.log('    ');
console.log('-------------');
console.log('    ');


const person = {
    vorname: 'John',
    nachname: 'Smith',
    alter: '41',
    beruf: 'engineer',
    stadt: 'Paris',
    land: 'France',
    printInfo: function() {
        return `${this.vorname} ${this.nachname} is a ${this.alter} year old ${this.beruf} living in ${this.stadt}/${this.land}.`
    },
    getObjectLength: function() {
        return Object.keys(this).length;
    }
};

console.log(person.printInfo());
console.log('    ');
console.log(person.getObjectLength());
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

const MyMath1 = {
    ceil: function(num){
    console.log(Math.ceil(num))
    },
    floor: function(num){
        console.log(Math.floor(num));
    },
    pow: function(num1, num2){
        console.log(Math.pow(num1, num2));
    },
    sqrt: function(num){
        console.log(Math.sqrt(num));
    },
    abs: function(num){
        console.log(Math.abs(num));
    },
};








const MyMath2 = {
    ceil: function(number) {
        console.log(parseInt(number) +1);
    },
    floor: function(number) {
        console.log(parseInt(number));
    },
    pow: function(number, number2) {
        let pow2 = number;
        for (let i = 1; i < number2; i++) {
            pow2 *= number
        };
        return pow2;
    },
};

console.log(MyMath2.pow(3, 3));