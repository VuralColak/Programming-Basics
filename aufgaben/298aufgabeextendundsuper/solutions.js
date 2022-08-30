// Das digitale Restaurant
// ------
// Wir programmieren uns ein Restaurant! Das Restaurant verfügt über eine Speisekarte, kann geöffnet oder geschlossen werden und führt eine Kasse mit ein wenig Wechselgeld zu Beginn. Über das Geld in der Kasse wird das Personal bezahlt, sobald das Restaurant schließt.

// Benötigt werden außerdem folgende Personengruppen: Gäste, Kellner, Köche (und Barkeeper). Gäste sollen Speisen und Getränke bestellen können, die von Kellnern aufgenommen und an Köche (und Barkeeper) weitergegeben werden. Köche (und Barkeeper) können Bestellungen von Kellnern erhalten und sie zubereiten. Nach der Zubereitung bringen Kellner die Speisen und Getränke zu den Gästen. Nach dem Essen bezahlen Gäste an Kellner. Zum Schluss bekommen Kellner und Köche (und Barkeeper) ihren Lohn.



// Restaurant
// + Speisekarte
// + geöffnet/geschlossen
// + Kasse
// - Personal bezahlen
class Restaurant {
    constructor (speisekarte, kassenbestand) {
        this.speisekarte = speisekarte;
        this.kasse = kassenbestand;
        this.geoeffnet = false;
    }

    personalBezahlen() {
        // ...
    }

    oeffnen() {
        this.geoeffnet = true;
    }

    schliessen() {
        this.geoeffnet = false;
    }

    // DEBUG --------
    status() {
        console.log("geöffnet?", this.geoeffnet);
    }
}

const restaurant = new Restaurant([], 0);


// Personal
// + Anfangswert ausgezahlter Lohn: 0€
// - Lohn erhalten
class Personal {
    constructor() {
        this.lohn = 0;
    }

    lohnErhalten(lohn) {
        this.lohn += lohn;
    }
}

const personal = new Personal();

// Kellner (erbt von Personal)
// - Bestellung aufnehmen
// - Bestellung weitergeben
// - Bestellung ausgeben
// - abkassieren
class Kellner extends Personal {
    bestellungAufnehmen(gericht) {
        console.log("Bestellung aufgenommen:", gericht);
        // ...
    }

    bestellungWeitergeben() {
        // ...
    }

    bestellungAusgeben() {
        // ...
    }

    abkassieren(gericht) {
        console.log("Bestellung abgerechnet:", gericht);
        // ...
    }
}

// Koch (erbt von Personal)
// - Bestellung erhalten
// - Bestellung zubereiten


// Gast
// - bestellen
// - bezahlen
class Gast {
    constructor(kellner) {
        this.kellner = kellner;
    }

    bestellen(gericht) {
        this.gericht = gericht;
        this.kellner.bestellungAufnehmen(gericht);
    }

    bezahlen() {
        console.log(`zu bezahlen: ${this.gericht.preis}€`);
        this.kellner.abkassieren(this.gericht);
    }
}



const kellner = new Kellner();

const gast1 = new Gast(kellner);
const gast2 = new Gast(kellner);

gast1.bestellen({ name: "Pizza", preis: 10 });
gast2.bestellen({ name: "Pasta", preis: 8 });

gast1.bezahlen();
gast2.bezahlen();