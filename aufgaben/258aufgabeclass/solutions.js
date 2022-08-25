// Aufgabe 1:

// Du bist Bootsbauer und entwirfst eine neue Art von Yacht.

// Erstelle eine Klasse Yacht die folgende Eigenschaften enthält:
// farbe (string), gewichtInKg (number), ps (number), name (string), schlafzimmer (number), badezimmer (number), hatEinBeiboot (boolean)

// Außerdem soll die Klasse drei Methoden erhalten:
// start() -> Soll auf der Konsole drucken: “Die Yacht <name> ist gestartet”
// anlegen() -> Soll auf der Konsole drucken: “Die Yacht <name> legt an”
// ablegen() -> Soll auf der Konsole drucken: “Die Yacht <name> legt ab”

// Erstelle drei Instanzen deiner Yacht mit verschiedenen Eigenschaften.


class Bootsbauer {
    constructor (farbe, gewichtInKg, ps, name, schlafzimmer, badezimmer, hatEinBeiboot){
        this.farbe = farbe;
        this.gewichtInKg= gewichtInKg;
        this.ps = ps;
        this.name=name;
        this.schlafzimmer=schlafzimmer;
        this.badezimmer=badezimmer;
        this.hatEinBeiboot=hatEinBeiboot;
    }
    start(){
        console.log(`Die Yacht ${this.name} ist gestartet`);
    }
    anlagen(){
        console.log(`Die Yacht ${this.name} legt an`)
    }
    ablagen(){
        console.log(`Die Yacht ${this.name} legt ab`)
    }
}

const Yacht = new Bootsbauer("blau", 12500, 100, "Pegasus", 2, 1, true );

console.log(Yacht);

Yacht.start();
Yacht.ablagen();
Yacht.ablagen();