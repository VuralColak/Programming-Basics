//////////////////////////////
console.log("               ");
console.log("-----------Frage-1------------");
console.log("               ");

// Frage-1 : Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.

const myText = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise.";

function aufgabe1(mySentence1){
    if(typeof mySentence1 !== "string"){
        return "Invalides Argument! Es muss ein String übergeben werden!"
    };
    const words1 = mySentence1.split(" ");
    for (let i = 0; i < words1.length; i++) {
    words1[i] = words1[i][0].toUpperCase() + words1[i].slice(1);
    };

    return words1.join(" ");
};

console.log(aufgabe1(myText));




//////////////////////////////
console.log("               ");
console.log("-----------Frage-2------------");
console.log("               ");

// Frage-2 : Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.


function aufgabe2(mySentence2){
    if(typeof mySentence2 !== "string"){
        return "Invalides Argument! Es muss ein String übergeben werden!"
    };
    const words2 = mySentence2.split(" ");
    let result2 = words2.slice(0, 29).join(" ") + "...";
    words2.join(" ");
    return result2;
};

console.log(aufgabe2(myText));




//////////////////////////////
console.log("               ");
console.log("-----------Frage-3------------");
console.log("               ");

// Frage-3 : Kombiniere beide Funktionen, sodass ein übergebener Text gekürzt und die Anfangsbuchstaben der Wörter in Großbuchstaben ausgegeben werden.


function aufgabe3(mySentence3){
    if(typeof mySentence3 !== "string"){
        return "Invalides Argument! Es muss ein String übergeben werden!"
    };
    const words3 = mySentence3.split(" ");

    for (let i = 0; i < words3.length; i++) {
        words3[i] = words3[i][0].toUpperCase() + words3[i].slice(1);
        };
    
        words3.join(" ");
    let result3 = words3.slice(0, 29).join(" ") + "...";
    return result3;
};

console.log(aufgabe3(myText));



//////////////////////////////
console.log("               ");
console.log("-----------Frage-4------------");
console.log("               ");

// Frage-4 : Prüfe in jeder Funktion, ob die übergebenen Werte tatsächlich Strings sind. Falls nicht, gib eine Fehlermeldung zurück (z.B. "Invalides Argument! Es muss ein String übergeben werden!").





//////////////////////////////
console.log("               ");
console.log("-----------Frage-5------------");
console.log("               ");

// Frage-5 : Sind deine Funktionen Pure Functions oder haben sie Side Effects? Begründe/Beweise deine Antwort.


