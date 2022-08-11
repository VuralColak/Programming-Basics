// Objects: Teil 1

// Bitte drucke jede deiner Antworten auf der Konsole aus.

// 1. Objekt Person. Erstelle ein Objekt namens person. Führe eine Schleife durch das Objekt und drucke sowohl die Eigenschaft als auch den Wert des Objekts aus.

//////////////////////////////////////
console.log(' ');
console.log('------Aufgabe-1-------');
console.log(' ');

const person = {
    firstname: 'Vural',
    lastname: 'Colak',
    age: 31,
    country: 'Turkey',
    job: 'Web-Developer',
};

for(const property in person){
    console.log(property);
    console.log(person[property]);
    console.log(property, person[property]);
};


//////////////////////////////////////
// 2. Get Values. Erstelle eine Funktion, die ein Array mit allen Werten der Eigenschaften eines Objekts zurückgibt.

console.log(' ');
console.log('------Aufgabe-2-------');
console.log(' ');

const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
};
function propertyValues() {
    console.log(Object.values(getObjectValues));
};

propertyValues();


//////////////////////////////////////
// 3. Füge eine Methode hinzu. Erstelle ein Objekt und füge eine Methode zu diesem Objekt hinzu, die die Werte der Objekte in einer Zeichenkette ausgibt.

console.log(' ');
console.log('------Aufgabe-3-------');
console.log(' ');

let person1 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    info:function(){
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`
    }
};

console.log(person1.info());


//////////////////////////////////////
// Bonusfragen
// 1. Konvertiere Schlüssel und Werte in ein Array. Erstelle eine Funktion, die ein Objekt in ein Array aus Schlüsseln und Werten umwandelt.

console.log(' ');
console.log('------Bonus-1-------');
console.log(' ');

let objectToArray1 = {
    A: 1,
    B: 2,
    C: 3
};

let objectToArray2 = {
    cats: 1,
    dogs: 2, 
    turtles: 4
};

function array(x) {
var result = Object.entries(x);
return result;
};

console.log(array(objectToArray1));
console.log(' ');
console.log(array(objectToArray2));


//////////////////////////////////////
// Bonusfragen
// 2. Eigenschaften auflisten. Erstelle eine Funktion, die ein Array von Eigenschaften eines Javascript-Objekts zurückgibt.

console.log(' ');
console.log('------Bonus-2-------');
console.log(' ');

let student = {
    name: "Mike", 
    class: "4A", 
    course: "English"
};

function propertyValuesOfStudent() {
    console.log(Object.keys(student));
};

propertyValuesOfStudent();


//////////////////////////////////////
// Bonusfragen
// 3. Verschmelzen. Erstelle eine Funktion, die zwei Objekte als Parameter nimmt und sie zu einem neuen Objekt zusammenführt.

console.log(' ');
console.log('------Bonus-3-------');
console.log(' ');

// Lösung-1
let first = {firstName: "John"};
let last = {lastName: "Smith"};

function merge(x, y) {
    var result = Object.assign(x, y);
    return result;
};

console.log(merge(first, last));

// Lösung-2

// function getNewObject(obj1, obj2){
//     const newObject = {
//     ...obj1,
//     ...obj2
//     }
//     return newObject;
// }
    
// console.log(getNewObject(first, last));


//////////////////////////////////////
// Bonusfragen
// 4. Tausche Schlüssel und Werte. Erstelle eine Funktion, um eine Kopie eines Objekts zu erhalten. Die Kopie muss die Schlüssel und Werte vertauschen.

console.log(' ');
console.log('------Bonus-4-------');
console.log(' ');


let person3 = {
    name: "John", 
    job: "teacher"
}
    
function swapKeysValues(object){
const newProperty = {};
for(const key in object){
newProperty[object[key]] = key;
}
return newProperty
}
    
console.log(swapKeysValues(person3));


//////////////////////////////////////
// Bonusfragen
// 5. Rückgabe von Schlüsseln und Werten. Schreibe ein Programm, das ein Objekt annimmt und ein Array zurückgibt, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das andere für die Werte des Objekts.

console.log(' ');
console.log('------Bonus-5-------');
console.log(' ');



const arrBonus5 = { a: 1, b: 2, c: 3 };

let person5 = {
    name: "John", 
    job: "teacher"
}

let student5 = {
    name: "Mike", 
    class: "4A", 
    course: "English"
}

function bonus5(q) {
    var newArrKeysBonus5 = Object.values(q);
    var newArrValuesBonus5 = Object.keys(q);
    var newArrBonus5 = [newArrValuesBonus5, newArrKeysBonus5];
    return newArrBonus5;
};

console.log(bonus5(arrBonus5));
console.log(bonus5(person5));
console.log(bonus5(student5));