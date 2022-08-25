# PB - Klassen - Grundlagen
In dieser Aufgabe geht es darum, die grundlegenden Konzepte von Klassen zu üben. Wir üben die Verwendung der Klasse `Date`, die in JavaScript eingebaut ist!
Füge deine Antworten direkt in diese Datei ein.
```js
const now = new Date();
const test = new Date();
```
1. Was ist die Variable `now` in dem obigen Code?
  - Name von der Variable
2. Welchen Typ hat die Variable `now`?
  - Object
3. Was ist in dem obigen Code die Variable `Date`?
  - Eine Methode
4. Was ist der Typ von `Date`?
  - Funktion
5. Was erhältst du, wenn du `console.log(now)` eingibst?
  - Datum des aktuellen Moments
6. Was erhältst du, wenn du `console.log(Date)` eingibst?
  - [Function: Date]
7. Was erhältst du, wenn du `console.log(new Date())` eingibst?
  - Datum des aktuellen Moments
8. Ist `now` wahrheitsgemäß?
  - Ja, es ist wahrheitsgemäß.
9. Was bekommst du, wenn du `console.log(now === test)` eingibst? Und warum?
  - Ich bekomme false zurück. Weil die beiden Milisekunden unterschiedlich sind.
10. Was bekommst du, wenn du `console.log(now === Date)` eingibst?
  - Ich bekomme false zurück. Weil die beiden unterschiedliche Type haben. Einer davon ist ein Objekt und die andere ist eine Methode.
11. Was bekommst du, wenn du `console.log(now === new Date())` machst?
  - Ich bekomme false zurück. Weil die beiden Milisekunden unterschiedlich sind.
12. Was bekommst du, wenn du `console.log(new Date() === new Date())` machst? Und warum?
  - Ich bekomme false zurück. Weil die beiden Milisekunden unterschiedlich sind.