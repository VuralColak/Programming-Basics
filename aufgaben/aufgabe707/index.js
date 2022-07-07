// Es ist Freitag um 17:00Uhr. Fantasia hat gerade ihren Code gepusht und einen Pull Request erstellt. Ihre Aufgabe war es die Passwort-Validierung für die Anmeldeseite von Tranzfer zu entwickeln (Das nennt man auch Implementieren). Folgenden Code hat sie gepusht:


/**
* Author: Fantasia
* Projekt: Signup Seite
* Feature: Password Validierung
* Company: Tranzfer
*/


// Password das der Nutzer eingegeben hat
// Zum Testen verändern
let password = "dci!123";
// State Variablen
let isPasswordSafe = true;
let errorMessages = [];
// Länge check -> Passwort muss mindestens 6 Buchstaben lang sein
if (password.length < 6) {
   isPasswordSafe = false;
   errorMessages.push("Password nicht lang genug");
}
// // Sonderzeichen check -> Passwort muss mindestens ein Sonderzeichen enthalten
if (
   !password.includes("!") &&
   !password.includes("$") &&
   !password.includes("%") &&
   !password.includes("&") &&
   !password.includes("+") &&
   !password.includes("#")
) {
    isPasswordSafe = false;
    errorMessages.push("Passwort muss Sonderzeichen enthalten");
}

// // Bekannte Worte check -> Passwort darf keine bekannten Worte enthalten

if (password.indexOf("password") >= 0  || password.indexOf("123456") >0) {
   isPasswordSafe = false;
   errorMessages.push("Passwort darf keine leichten Worte enthalten");
}


// // Zum Schluss gibt das Programm aus ob das Passwort sicher ist


console.log("Überprüfung abgeschlossen.");
console.log(
   isPasswordSafe ? "Passwort ist sicher." : "Passwort ist nicht sicher!"
);

if (isPasswordSafe) {
   console.log("Anmeldung kann fortfahren.");
} else {
   console.log("Es gab folgende Fehler:");
   console.log(errorMessages.join(" | "));
}


// Du erschließt dir aus Fantasias Kommentaren die wahre Aufgabe des Codes und findest heraus was er tun soll. Anschließend korrigierst du Fantasias Code (Das nennt man auch refactoring) und kommentierst in jeder Zeile welche Fehler sie gemacht hat (Das nennt man code review).
// Wenn alle Fehler beseitigt sind kannst du Fantasia auch noch Tipps für “besseren” Code geben.