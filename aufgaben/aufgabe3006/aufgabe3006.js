/**
* Author: Fantasia
* Projekt: Bankanbindung Sparkasse
* Subprojekt: Senden einer Überweisung
* Company: tranzfer
*/
const API_URL = "api.sparkasse.de/v3/accounts";

//Anfrühungzeich war falsch. ich habe verändert.

const API_KEY = "lwqdjOI987HHUIaihjaskdh";
//Man soll "Key" Wort mit Große Buchstaben schreiben.

const TRANZFER_CUSTOMER_ID = "tranzfer-009";

//Zweite Anfrühungzeich war falsch. ich habe verwendelt. Oder Man soll erste Anfrühungzeichen verändern.

let bankName = "Sparkasse";

//Man soll N Buchstabe groß schreiben.

console.log("Initialisiere Verbindung...");

//Man soll Klammer auf machen.

console.log("Verbindung mit " + bankName + " hergestellt");

//Man soll zuerst Punkt zwischen console und log stellen. Danach soll man vor bankName + stellen. Und N Buchstabe soll man groß schreiben.

let einskunde = "Jan Müller";

//Man soll Anzahlen immer als Strings schreiben. Oder am Ende soll man schreiben. Und ; soll man stellen.

let zweikunde = "Martina Stein";

//Man soll Anzahlen immer als Strings schreiben. Oder am Ende soll man schreiben.

let iban1 = 1234-0000-9908-9999;

//Das ist ein Number. Deswegen soll man Anfrühungzeichen nicht benutzen. Leerzeichen soll man löschen oder minus soll man stellen.

let iban2 = 1222-0000-9908-9999;

//Man soll iban name verändern. Weil man gleiche name zweite mal nicht benutzen. Das ist ein Number. Deswegen soll man Anfrühungzeichen nicht benutzen. Leerzeichen soll man löschen oder minus soll man stellen.

let betrag = 23.3;

// Vor Betrag soll man Leerzeichen stellen. Und soll man zweite punkt löschen.

console.log("Starte Überweisung");

//Keine Fehler

console.log(`Von "${einskunde}" IBAN: "${iban1}"`);

// Die Art von Anführungszeichen sollte glich sein. Hier muss man am Ende (`) stellen.
// Falsch
// console.log(`Von "${kunde1}" IBAN: "${iban1}");
// Richtig 

console.log(`Nach "${zweikunde}" IBAN: "${iban2}"`);

//Kunde name soll man korrigieren.

console.log(`Sende Betrag "${betrag}" €`);

//${betrag} soll man drin zwischen Anfrühungzeichen stellen.

console.log("Überweisung erfolgreich");

//Keine Fehler

// Transaktionsdauer erfassen

// Extra ein / soll man stellen.

bankName = "Sparkasse Berlin";

// Obenen Const bankName soll man mit let bankName verändern.

let transaktionsDauer;
transaktionsDauer = 100;

//Zwei zeilen soll man zusammen schreiben. Const soll man let machen.

console.log("Beende Verbindung...");

//Keine Fehler

console.log('Verbindung mit ' + bankName + " beendet");

//bankname soll man n Buchstabe groß schreiben.

console.log("Dauer der Transaktion " + transaktionsDauer + "s");

//Keine Fehler
