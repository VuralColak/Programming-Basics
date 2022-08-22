// Es ist Montag. Du bist nach einem großartigen Wochenende zurück im Büro, aber dort erwartet dich eine schlechte Nachricht: Fantasia ist krank und die Deadline des Projekts rückt immer näher! Sie hat dir drei Funktionen überlassen, die Benennung ist aber nicht wirklich hilfreich und du musst nun herausfinden, ob und wie sie benutzt werden können.

// - Teste die Funktionen
// - Finde heraus, was sie tun und vor allem: wie sie es tun
// - Schreibe Kommentare in den Code
// - Finde passende Namen für Variablen
// - Bonus: Bestimme die Komplexität der Funktionen
// - Bonus: Gibt es Unterschiede, wenn bestimmte Argumente übergeben werden?

function functionA(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            const currentElement = array[j];
            // Variable a ist immer erste Werte.
            // Variable b ist immer zweite Werte.
            // Erste Loop ist 2 mal.
            // Zweite Loop ist 1 mal.
            // For Loop dreht sich insgesamt 3 mal.
            const nextElement = array[j + 1];
            if (currentElement > nextElement) {
                array[j] = nextElement;
                array[j + 1] = currentElement;
            }
        }
    }
    return array;
}

console.log(functionA([3, 6, 8, 1]));

// Diese Funktion gibt uns die aufsteigen sortierten Werte.


function functionB(array) {
    let x;
    for (let i = 0; i < array.length - 1; i++) {
        x = i;
        for (let j = i; j < array.length; j++) {
            if (array[x] > array[j]) {
                x = j;
            }
        }
        if (i !== x) {
            const a = array[i];
            const b = array[x];
            array[i] = b;
            array[x] = a;
        }
    }
    return array;
}

// Diese Funktion gibt uns die aufsteigen sortierten Werte.


function functionC(array) {
    let x;
    for (let i = 1; i < array.length; i++) {
        let j = i;
        x = array[i];
        while (j > 0 && array[j - 1] < x) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = x;
    }
    return array;
}

// Diese Funktion gibt uns die absteigen sortierten Werte.


const arr = [2, 6, 1, 5, 3, 9];

console.log(arr.sort((a, b) => a-b));
