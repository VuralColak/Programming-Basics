// 1

let result = 0;
for (let x = 1; x <= 20; x++) {
    result += x;
}
console.log(result);

// 2
for (let i = 1; i < 6; i++) {
    if (i === 1) {
        console.log("Es befindet sich 1 Flasche Bier an der Wand.");
        continue;
    }

    console.log(`Es befinden sich ${i} Flaschen Bier an der Wand`);
}

// 3
for (let j = 0; j <= 20; j++) {
    const istGerade = j % 2 === 0;
    console.log(istGerade ? `${j} ist gerade` : `${j} ist ungerade`);
}

// 4
for (let value = 1; value <= 10; value++) {
    console.log(`${value} * 9 = ${value * 9}`);
}

// Bonus
for (let one = 1; one <= 10; one++) {
    for (let two = 1; two <= 10; two++) {
        console.log(`${two} * ${one} = ${two * one}`);
    }
}

// 5
for (let i = 1; i < 101; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 6
let sum = 0;
for (let i = 1; i < 1001; i++) {
    // Man kann es auch mit && lösen
    // Je nachdem wie man die Aufgabe versteht
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

// 7

// 7.1
let result71 = "";
for (let nummer = 100; nummer <= 1000; nummer += 100) {
    result71 += nummer + " ";
}
console.log(result71);

// 7.2
let result72 = "";
for (let even = 0; even <= 10; even += 2) {
    result72 += even + " ";
}
console.log(result72);

// 7.3
// Wie die zwei davor nur += 3

// 7.4
let result74 = "";
for (let i = 9; i > -1; i--) {
    result74 += i + " ";
}
console.log(result74);

// 7.5
let result75 = "";
for (let i = 1; i < 5; i++) {
    result75 += i.toString().repeat(3);
}
console.log(result75);

// 7.6
let result76 = "";
for (let i = 0; i < 15; i++) {
    result76 += (i % 5) + " ";
}
console.log(result76);

// Andere Lösung mit verschachtelten for Schleifen
let result76a = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        result76a += j + " ";
    }
}
console.log(result76a);

// 10 % 2 = 0
// 10 % 3 = 1
// 10 % 4 = 2
// 10 % 6 = 4

// 8

let wordToCheck = "apfel";
let reversedWord = "";
for (let i = wordToCheck.length - 1; i >= 0; i--) {
    reversedWord += wordToCheck[i];
}

if (wordToCheck === reversedWord) {
    console.log(wordToCheck, "ist ein Palindrom");
} else {
    console.log(wordToCheck, "ist kein Palindrom");
}

console.log(wordToCheck, reversedWord);

// 8 Alternativ lösung

const str = "tarrattarrat";
const reversedStr = str.split("").reverse().join("");
if (str === reversedStr) {
    console.log("Ist Palindrom");
} else {
    console.log("Ist kein Palindrom");
}