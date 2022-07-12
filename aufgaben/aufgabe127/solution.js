// Wir haben die folgende Funktion erhalten, die wir für zwei Aufträge verwenden wollen.
// Die Funktion selbst dürfen wir nicht verändern, aber beliebig oft ausführen.

// Wichtig:
// Unsere zwei Aufträge sollen mit beliebig vielen Zufallszahlen funktionieren.
// Wir müssen daher darauf achten, dass unser Algorithmus mit unterschiedlichen Mengen arbeiten kann.




function getRandomNumbers(amount) {
    const numbers = Array();

    for (let i = 0; i < amount; i++) {
        numbers.push(parseInt(Math.random() * 100));
    }

    return numbers;
}


// Beispiel: gib 10 Zufallszahlen aus und speichere sie in der Variable randomNumbers

const randomNumbers = getRandomNumbers(10);
console.log(randomNumbers);


// Frage 1 : 

// // 1. Gib die Anzahl der Zahlen unter 50 aus.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Es gibt 2 Zahlen unter 50.

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.

let frage1 = Array();
for (let i=0; i<randomNumbers.length; i++){
    if(randomNumbers[i]<50){
        frage1.push(randomNumbers[i]);
    }
}
console.log({frage1});
console.log(`Es gibt ${frage1.length} Zahlen unter 50.`);



// 2. Gib zwei Arrays aus: Eines mit den Zahlen unter 50, und eines mit den Zahlen größer oder gleich 50.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Zahlen unter 50: [1, 40]
// Zahlen größer oder gleich 50: [59, 50, 99]

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.


console.log("//////////////////////")


let frage2a = Array();
for (let i=0; i<randomNumbers.length; i++){
    if(randomNumbers[i]<50){
        frage2a.push(randomNumbers[i]);
    }
}
console.log("Zahlen unter 50: ", frage2a);


console.log("//////////////////////")


let frage2b = Array();
for (let i=0; i<randomNumbers.length; i++){
    if(randomNumbers[i]>=50){
        frage2b.push(randomNumbers[i]);
    }
}
console.log("Zahlen größer oder gleich 50: ", frage2b);