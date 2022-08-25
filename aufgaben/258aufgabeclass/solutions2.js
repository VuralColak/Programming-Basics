console.log(' ');
console.log('-----Class Aufgabe-2-----');
console.log(' ');

const now = new Date(); 
const test = new Date();



console.log(now===Date)


console.log(typeof now)
console.log(typeof Date())




console.log(new Date() === new Date())



console.log(now === new Date())

console.log(new Date() === new Date())

// # PB - Klassen - Grundlagen

// In dieser Aufgabe geht es darum, die grundlegenden Konzepte von Klassen zu üben. Wir üben die Verwendung der Klasse `Date`, die in JavaScript eingebaut ist!

// Füge deine Antworten direkt in diese Datei ein.

// ```js
// const now = new Date();
// const test = new Date();
// ```

// 1. Was ist die Variable `now` in dem obigen Code?
// 2. Welchen Typ hat die Variable `now`?
// 3. Was ist in dem obigen Code die Variable `Date`?
// 4. Was ist der Typ von `Date`?
// 5. Was erhältst du, wenn du `console.log(now)` eingibst?
// 6. Was erhältst du, wenn du `console.log(Date)` eingibst?
// 7. Was erhältst du, wenn du `console.log(new Date())` eingibst?
// 8. Ist `now` wahrheitsgemäß?
// 9. Was bekommst du, wenn du `console.log(now === test)` eingibst? Und warum?
// 10. Was bekommst du, wenn du `console.log(now === Date)` eingibst?
// 11. Was bekommst du, wenn du `console.log(now === new Date())` machst?
// 12. Was bekommst du, wenn du `console.log(new Date() === new Date())` machst? Und warum?



console.log(' ');
console.log('-----Bank Aufgabe-----');
console.log(' ');


// ## Aufgabenstellung
// Erstelle ein Objekt lege es in einer Variable namens `bankkonto` ab. Das Objekt soll folgende Eigenschaften haben:
// -   `kontostand`, eine `Number` die den aktuellen Kontostand enthält.
// -   `iban`, ein `String` mit der IBAN des Bankkontos.
// -   `bankname`, ein `String` mit dem Namen der Bank.
// -   `kontoinhaber`, ein `String` mit dem Vor- und Nachnamen des Kontoinhabers
// Außerdem soll das Bankkonto folgende Methoden besitzen:
// -   `abheben`, eine Methode die als Parameter einen Betrag x erhält und ihn vom Kontostand abzieht. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich abgehoben. Der neue Kontostand ist y€`
// -   `einzahlen`, eine Methode die als Parameter einen Betrag x erhält und ihn zum Kontostand addiert. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich eingezahlt. Der neue Kontostand ist y€`
// - `zeigInfo`, eine Methode ohne Parameter, welche auf der Konsole folgenden String ausgibt: `Dies ist eine Konto der x Bank. Die IBAN dieses Kontos lautet y.`
// ## Bonus
// Erweitere die Methode `abheben` sodass sie den Kontostand nicht verändert und ausgibt: `x€ konnte nicht abgehoben werden.`, falls der Kontostand nicht ausreicht. 


// die Lösung mit Object

// const Bankkonto = {
//     kontostand : 5000,
//     iban : "DE50 1000 0000 0000 0000",
//     bankname : "Berliner Sparkasse",
//     kontoinhaber : "Hüseyin Günaydin",

//     abheben : function(betrag){
//         if(betrag > this.kontostand ){
//             console.log(`${betrag}€ konnte nicht abgehoben werden.`);
//             return
//         }
//         this.kontostand = this.kontostand - betrag;
//         console.log(`${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`);
// },
//    einzahlen : function (betrag){
//     this.kontostand = this.kontostand + betrag; 
//     console.log (`${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontostand}€`);
// },
//     zeigInfo : function(){
//     console.log(`Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}.`);

// }
// }

// Bankkonto.abheben(55000);
// Bankkonto.einzahlen(1000);
// Bankkonto.einzahlen(100000);
// Bankkonto.zeigInfo();
// Bankkonto.zeigInfo();




// die Lösung mit Class




class bankkonto {
    constructor(kontostand, iban, bankname , kontoinhaber){
        this.kontostand=kontostand;
        this.iban=iban;
        this.bankname=bankname;
        this.kontoinhaber=kontoinhaber;
    }
    abheben(betrag){
        if(betrag > this.kontostand){
        console.log(`${betrag}€ konnte nicht abgehoben werden.`);
        return
    }
    this.kontostand = this.kontostand - betrag;
        console.log(`${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`);

}
    einzahlen(betrag){
        this.kontostand=this.kontostand+betrag;
        console.log(`${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontostand}€`)
    }
    zeigInfo(){
        console.log(`Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}.`);
    }
}
const vuralBankKonto = new bankkonto(5000, "DE50 1000 0000 0000 0000", "Berliner Sparkasse", "Hüseyin Günaydin");
console.log(vuralBankKonto);


vuralBankKonto.abheben(6000);
vuralBankKonto.einzahlen(1000);
vuralBankKonto.einzahlen(10000);
vuralBankKonto.zeigInfo();