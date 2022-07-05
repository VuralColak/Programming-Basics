// 1. Entscheidungshilfe
// Entscheidungen sind nicht immer einfach. Oftmals stehen wir vor zwei Möglichkeiten und wissen nicht, welche wir wählen sollen. Wäre es nicht großartig, wenn wir ein kleines Programm dafür hätten, was uns diese schwierige Aufgabe abnimmt?
// Entwickle ein Programm, das uns ein "Ja!" oder "Nein!" ausgibt, wenn wir es ausführen. Die Antwort soll dabei zufällig gewählt werden.

//////////////////////////////////

// Aufgabe1

const x = Math.round((Math.random() * 100) + 1);

if (x <= 50){
    console.log("Ja!");
} else {
    console.log("Nein! :((");
};

//////////////////////////////////


//Aufgabe2

const würfelnNo = Math.floor((Math.random() * 6) + 1);
console.log({würfelnNo});

if (würfelnNo < 6){
    console.log("Leider konnten Sie nicht gewinnen!");
} else  {
    console.log("Herzlichen Glückwunsch! Sie haben gewonnen. Sie können noch einmal würfeln!");
};

////////////////////////////////////



