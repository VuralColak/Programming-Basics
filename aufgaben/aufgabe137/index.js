// Deklariere eine Funktion mit dem Namen istGeradeZahl, welche einen Parameter zahl erhält und einen Boolean zurück gibt. Der Boolean soll true sein wenn die Zahl gerade ist und false wenn sie nicht gerade ist. Führe zum Schluss den folgenden Code aus und überprüfe dein Ergebnis:




function istGeradeZahl(zahl){

    const gerade = zahl % 2 === 0;
    // if (gerade === true){
    //     console.log("True");
    // } else {
    //     console.log("False");
    // };
    return gerade;
}

console.log(istGeradeZahl(3),"soll false sein");
console.log(istGeradeZahl(10),"soll true sein");
console.log(istGeradeZahl(7),"soll false sein");
console.log(istGeradeZahl(40),"soll true sein");
console.log(istGeradeZahl(99),"soll false sein");
console.log(istGeradeZahl(120),"soll true sein");