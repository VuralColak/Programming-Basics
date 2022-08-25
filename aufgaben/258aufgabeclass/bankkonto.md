# Bankkonto

## Aufgabenstellung

Erstelle eine Klasse Konto. Die Klasse soll folgende Eigenschaften haben:

-   `kontostand`, eine `Number` die den aktuellen Kontostand enthält.
-   `iban`, ein `String` mit der IBAN des Bankkontos.
-   `bankname`, ein `String` mit dem Namen der Bank.
-   `kontoinhaber`, ein `String` mit dem Vor- und Nachnamen des Kontoinhabers

Außerdem soll die Klasse Konto folgende Methoden besitzen:

-   `abheben`, eine Methode die als Parameter einen Betrag x erhält und ihn vom Kontostand abzieht. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich abgehoben. Der neue Kontostand ist y€`
-   `einzahlen`, eine Methode die als Parameter einen Betrag x erhält und ihn zum Kontostand addiert. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich eingezahlt. Der neue Kontostand ist y€`
- `zeigInfo`, eine Methode ohne Parameter, welche auf der Konsole folgenden String ausgibt: `Dies ist eine Konto der x Bank. Die IBAN dieses Kontos lautet y.`

## Bonus

Erweitere die Methode `abheben` sodass sie den Kontostand nicht verändert und ausgibt: `x€ konnte nicht abgehoben werden.`, falls der Kontostand nicht ausreicht.
