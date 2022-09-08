# Das Kassiererproblem 

Implementiere eine Funktion `calculateChange`, die einer Kassiererin hilft, den Kunden angemessenes Wechselgeld zu geben. Das Programm soll die Menge an Scheinen und Münzen für das Wechselgeld des Kunden zurückgeben. `calculateChange` erhält zwei Parameter. 1. price und 2. amountPaid



Beispiel: Wenn der Preis 3,75 € beträgt und der bezahlte Betrag 50 €, dann sollte der Kunde 46,25 € Wechselgeld zurückbekommen. 
* Die erwartete Ausgabe sollte sein: 
* 2 x 20 € // 2 Zwanzig-Euro-Scheine
* 1 x 5 € // 1 Fünf-Euro-Schein
* 1 x 1 € // 1 Euro
* 1 x 0,2 € // 1 Zwanzig-Cent-Münze
* 1 x 0,05 € // 1 Fünf-Cent-Münze

```js
calculateChange(3.75, 50) // returns: 2 x 20 €, 1 x 5 €, 1 x 1 €, 1 x 0,2 €, 1 x 0,05 €
```

Beispiel: Preis: 4,50 €, Bezahlter Betrag: 20 €, Wechselgeld: 15.50
* Erwartete Ausgabe: 
* 1 x €10
* 1 x €5
* 1 x €0.5

```js
calculateChange(4.5, 20) // returns: 1 x 10 €, 1 x 5 €, 1 x 0.5 €
```

* Anmerkungen
* Enthält Ausgaben für Ausnahmen, z. B. Preis: €4, bezahlter Betrag: €3. 
